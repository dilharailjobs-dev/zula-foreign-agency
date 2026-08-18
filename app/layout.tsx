import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zula Foreign Agency | Trusted Overseas Employment",
  description:
    "Zula Foreign Agency helps job seekers find safe, verified overseas employment opportunities with full documentation support, from application to placement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
