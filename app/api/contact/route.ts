import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL, // Your email address
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            New Contact Message
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 10px; background: #f5f5f5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold;">Email:</td>
              <td style="padding: 10px;">
                <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">
                  ${email}
                </a>
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 30px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #0066cc; white-space: pre-wrap;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Save to database or log
    console.log("Contact message sent successfully:", { name, email });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes("EAUTH")) {
        return NextResponse.json(
          {
            error:
              "Email service authentication failed. Please try again later.",
          },
          { status: 500 },
        );
      }
      if (error.message.includes("ENOTFOUND")) {
        return NextResponse.json(
          { error: "Email service unavailable. Please try again later." },
          { status: 500 },
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
