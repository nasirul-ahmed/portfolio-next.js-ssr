import type { Metadata } from "next";
import { Lato, Quintessential } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Profile from "./_components/Profile";
import { ThemeProvider } from "./_providers/ThemeProvider";
import { config } from "@/config/config";

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-quintessential",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
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
    description: "Check out my portfolio and projects",
    // Todo: need top configure later
    url: `https://${config.username}.com`,
    siteName: config.name,
    images: [
      {
        url: "/images/profile2.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.className} ${quintessential.variable} scroll-smooth`}
      >
        <ThemeProvider>
          <main className={`flex w-full h-screen overflow-hidden gap-0`}>
            <section className="w-[30%] lg:p-4 hidden lg:flex flex-col border-r border-white/10 bg-[var(--material)] dark:bg-[var(--material)]">
              <Profile />
            </section>

            <section className="flex-1 flex bg-white dark:bg-black flex-col w-full rounded-r-2xl md:rounded-l-none rounded-l-2xl overflow-hidden">
              <div className="flex-none z-50">
                <Header />
              </div>

              <section className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar scroll-smooth">
                <div className="lg:hidden px-6 pt-6 mb-6">
                  <Profile />
                </div>
                <div className="max-w-4xl mx-auto">{children}</div>
                <Footer />
              </section>
            </section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
