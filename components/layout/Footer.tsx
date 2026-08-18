import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/mock-data";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 2.7c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.7 2.7 0 0 0-.67-1.02 2.7 2.7 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.99 4.71 14.67 4.7 12 4.7Zm0 3.7a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2Zm0 1.94a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Zm4.58-2.13a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.12c-.42.05-1.34.05-2.16.92C2.6 5.7 2.4 7.2 2.4 7.2S2.19 8.95 2.19 10.7v1.6c0 1.75.21 3.5.21 3.5s.21 1.5.85 2.16c.82.87 1.9.84 2.38.93 1.73.17 7.35.22 7.37.22 0 0 3.6-.01 6.58-.13.43-.05 1.35-.05 2.17-.92.64-.66.85-2.16.85-2.16s.21-1.75.21-3.5v-1.6c0-1.75-.21-3.5-.21-3.5ZM9.98 14.6V8.7l5.44 2.96-5.44 2.94Z",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-cream">
              Zula Foreign Agency
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">
              Your trusted partner for safe, transparent overseas employment,
              from application to placement and beyond.
            </p>
            <p className="mt-4 text-xs text-cream/50">
              A member of the Zula Achzakot business group.{" "}
              <a href="#" className="underline hover:text-accent">
                Visit Zula Achzakot
              </a>
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>142 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="shrink-0 text-accent" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="shrink-0 text-accent" />
                <span>info@zulaforeignagency.com</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream">Follow Us</p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
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

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Zula Foreign Agency. All rights
            reserved.
          </p>
          <p>Licensed Foreign Employment Agency &mdash; Reg. No. BFE/2004/0187</p>
        </div>
      </div>
    </footer>
  );
}
