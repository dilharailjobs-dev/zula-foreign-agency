"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Check, Globe } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n/config";
import { setLocaleAction } from "@/lib/i18n/actions";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, dict } = useI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on an outside click or Escape — the menu sits in a sticky header, so
  // leaving it open while the user moves on would overlay the page content.
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: MouseEvent | TouchEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(next: Locale) {
    setIsOpen(false);
    if (next === locale) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isPending}
        aria-label={`${dict.header.languageSwitcherLabel}: ${dict.common.languageNames[locale]}`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-cream text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-60"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={dict.header.languageSwitcherLabel}
          className="absolute end-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-black/10 bg-white py-1 shadow-lg"
        >
          {locales.map((code) => {
            const isActive = code === locale;
            return (
              <button
                key={code}
                type="button"
                role="menuitem"
                lang={code}
                onClick={() => handleSelect(code)}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-start text-sm transition-colors hover:bg-primary-light ${
                  isActive ? "font-semibold text-primary" : "text-ink-soft"
                }`}
              >
                {dict.common.languageNames[code]}
                {isActive && <Check size={16} className="shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
