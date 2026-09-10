import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactInfo, groupSites, legalLinks, navLinks } from "@/lib/mock-data";
import { getLocale } from "@/lib/i18n/get-locale";
import { getDictionary } from "@/lib/i18n/get-dictionary";

const socialLinks = [
  {
    id: "facebook" as const,
    href: "https://www.facebook.com/profile.php?id=61593760631265",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    id: "instagram" as const,
    href: "https://www.instagram.com/zulaachzakot/",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 2.7c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.67-1.02 2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.99 4.71 14.67 4.7 12 4.7Zm0 3.7a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2Zm0 1.94a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Zm4.58-2.13a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68Z",
  },
  {
    id: "tiktok" as const,
    href: "https://www.tiktok.com/@zulaworkspace",
    path: "M16.6 5.82c-.9-.78-1.47-1.9-1.6-3.13V2.4h-3.24v13.36c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-1.09-5.59 2.9 2.9 0 0 1 1.09-.21c.2 0 .4.02.59.05V9.6a6.14 6.14 0 0 0-.59-.03 6.14 6.14 0 1 0 6.14 6.14V9.28a8.36 8.36 0 0 0 4.9 1.57V7.6a5.02 5.02 0 0 1-3.3-1.78Z",
  },
];

export default async function Footer() {
  const locale = await getLocale();
  const dict = await getDictionary(locale);

  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream p-1.5">
                <Image
                  src="/images/brand/logo-icon.jpg"
                  alt={dict.common.siteName}
                  width={25}
                  height={28}
                  className="h-full w-auto"
                />
              </span>
              <p className="font-display text-lg font-bold text-cream">
                {dict.common.siteName}
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream/70">{dict.footer.tagline}</p>
            <p className="mt-6 text-sm font-semibold text-cream">{dict.footer.groupHeading}</p>
            <ul className="mt-3 space-y-2">
              {groupSites.map((site) => (
                <li key={site.id}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/70 underline decoration-cream/30 underline-offset-2 hover:text-accent hover:decoration-accent"
                  >
                    {site.name}
                  </a>
                  <span className="text-xs text-cream/40">
                    {" "}
                    &mdash; {dict.footer.groupSites[site.id as keyof typeof dict.footer.groupSites]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">{dict.footer.quickLinks}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-accent"
                  >
                    {dict.header.navLinks[link.id as keyof typeof dict.header.navLinks]}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/employers"
                  className="text-sm text-cream/70 hover:text-accent"
                >
                  {dict.footer.forEmployers}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">{dict.footer.contact}</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="shrink-0 text-accent" />
                <span dir="ltr">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="shrink-0 text-accent" />
                <span dir="ltr">{contactInfo.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">{dict.footer.followUs}</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={dict.footer.socialLabels[social.id]}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-accent hover:text-ink"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.id} href={link.href} className="hover:text-accent">
                {dict.footer.legalLinks[link.id as keyof typeof dict.footer.legalLinks]}
              </Link>
            ))}
          </div>
          <p>{dict.footer.slbfeDisclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
