import type { Metadata } from "next";
import { Manrope, Sora, Noto_Sans_Sinhala, Noto_Sans_Tamil, Noto_Sans_Hebrew } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { rtlLocales } from "@/lib/i18n/config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const notoSinhala = Noto_Sans_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala"],
});

const notoTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
});

const notoHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-hebrew",
  subsets: ["hebrew"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const dict = await getDictionary(locale);
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${manrope.variable} ${sora.variable} ${notoSinhala.variable} ${notoTamil.variable} ${notoHebrew.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <I18nProvider locale={locale} dict={dict}>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
