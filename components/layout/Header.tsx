"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/mock-data";
import { useI18n } from "@/components/i18n/I18nProvider";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { dict } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/images/brand/logo-icon.svg"
            alt={dict.common.siteName}
            width={36}
            height={40}
            className="h-9 w-auto"
          />
          <span className="font-display text-lg font-bold text-primary sm:text-xl">
            {dict.common.siteName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {dict.header.navLinks[link.id as keyof typeof dict.header.navLinks]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
          >
            {dict.header.registerCta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-label={isOpen ? dict.header.closeMenu : dict.header.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 bg-cream lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-primary-light hover:text-primary"
              >
                {dict.header.navLinks[link.id as keyof typeof dict.header.navLinks]}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <LanguageSwitcher className="w-full" />
            </div>
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink hover:bg-accent-dark"
            >
              {dict.header.applyNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
