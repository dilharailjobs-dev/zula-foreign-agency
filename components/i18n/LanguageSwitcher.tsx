"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";
import { setLocaleAction } from "@/lib/i18n/actions";
import { useI18n } from "@/components/i18n/I18nProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, dict } = useI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function handleChange(next: Locale) {
    if (next === locale) return;
    startTransition(async () => {
      await setLocaleAction(next);
      router.refresh();
    });
  }

  return (
    <select
      aria-label={dict.header.languageSwitcherLabel}
      value={locale}
      disabled={isPending}
      onChange={(event) => handleChange(event.target.value as Locale)}
      className={`rounded-full border border-black/10 bg-cream px-3 py-2 text-sm text-ink focus:border-primary focus:outline-none disabled:opacity-60 ${className}`}
    >
      {locales.map((code) => (
        <option key={code} value={code}>
          {dict.common.languageNames[code]}
        </option>
      ))}
    </select>
  );
}
