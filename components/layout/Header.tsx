"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/mock-data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/brand/logo-icon.jpg"
            alt="Zula Foreign Agency"
            width={40}
            height={29}
            className="h-9 w-auto"
            priority
          />
          <span className="font-display text-lg font-bold text-primary sm:text-xl">
            Zula Foreign Agency
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-accent-dark"
          >
            Apply Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-primary-light hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink hover:bg-accent-dark"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
