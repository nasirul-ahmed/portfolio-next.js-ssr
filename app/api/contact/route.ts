import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const config: SMTPTransport.Options = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    };

    // console.log('SMTP Config:', config);

    const transporter = nodemailer.createTransport(config);

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `,
      html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 580px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
          
          <!-- Header -->
          <div style="padding: 40px 0 20px;">
            <h2 style="font-size: 24px; font-weight: 700; margin: 0; color: #111;">New Inquiry</h2>
            <p style="color: #666; margin: 5px 0 0; font-size: 14px;">Portfolio Contact Form</p>
          </div>

          <!-- Content Box -->
          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; font-weight: 600; margin-bottom: 4px;">From</label>
              <p style="margin: 0; font-size: 16px;"><strong>${name}</strong> <span style="color: #6b7280; font-weight: 400;">&lt;${email}&gt;</span></p>
            </div>

            <div style="margin-bottom: 20px;">
              <label style="display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #9ca3af; font-weight: 600; margin-bottom: 4px;">Message</label>
              <div style="font-size: 15px; color: #374151; white-space: pre-wrap; background: #f9fafb; padding: 16px; border-radius: 6px;">
                ${message}
              </div>
            </div>

            <a href="mailto:${email}" style="display: inline-block; background-color: #000; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-size: 14px; font-weight: 500;">
              Reply to ${name}
            </a>
          </div>

          <!-- Footer -->
          <footer style="padding: 24px 0; text-align: center;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">
              Sent via your portfolio website.
            </p>
          </footer>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('EAUTH')) {
        return NextResponse.json(
          {
            error: 'Email service authentication failed. Please try again later.',
          },
          { status: 500 }
        );
      }
      if (error.message.includes('ENOTFOUND')) {
        return NextResponse.json(
          { error: 'Email service unavailable. Please try again later.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
