import type { Metadata } from 'next';
import { Lato, Quintessential } from 'next/font/google';
import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';
import Profile from './_components/Profile';
import { ThemeProvider } from './_providers/ThemeProvider';
import { config } from '@/config/config';

const quintessential = Quintessential({
  subsets: ['latin'],
  weight: '400',
  style: ['normal'],
  variable: '--font-quintessential',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-lato',
});

// Metadata API for better SEO [citation:2]
export const metadata: Metadata = {
  title: {
    default: `${config.name} - ${config.role}`,
    template: `%s | ${config.name}`,
  },
  description: config.description,
  openGraph: {
    title: `${config.name} - ${config.role}`,
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/profile2.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const dynamic = 'force-static';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${lato.variable} ${quintessential.variable} scroll-smooth`}>
        <ThemeProvider>
          <main className={`flex w-full h-screen overflow-hidden gap-0`}>
            <section className='w-[30%] lg:p-4 hidden lg:flex flex-col border-r border-white/10 bg-gray-100/50 dark:bg-black overflow-y-auto no-scrollbar scroll-smooth'>
              <Profile />
            </section>

            <section className='relative flex-1 flex bg-white dark:bg-[var(--material)] flex-col w-full overflow-hidden'>
              <Header />

              {/* <section className='flex-1 overflow-y-auto px-6 py-8 no-scrollbar scroll-smooth'>
                <div className='lg:hidden sm:px-6 pt-6 mb-6'>
                  <Profile />
                </div>
                <div className='max-w-4xl mx-auto lg:mt-24'>{children}</div>
                <Footer />
              </section> */}
              <section className='flex flex-col flex-1 overflow-hidden'>
                {/* Scrollable content */}
                <div className='flex-1 overflow-y-auto px-6 py-8 no-scrollbar scroll-smooth'>
                  <div className='lg:hidden sm:px-6 pt-6 mb-6'>
                    <Profile />
                  </div>

                  <div className='max-w-4xl mx-auto lg:mt-24'>{children}</div>
                </div>

                {/* Footer pinned to bottom */}
                <Footer />
              </section>
            </section>
          </main>
        </ThemeProvider>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: config.name,
              url: config.domain,
              jobTitle: config.role,
              sameAs: config.socials.map(social => social.url),
            }),
          }}
        />
      </body>
    </html>
  );
}
