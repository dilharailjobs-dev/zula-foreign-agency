import { cookies } from "next/headers";
import { cache } from "react";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";

export const getLocale = cache(async (): Promise<Locale> => {
  const store = await cookies();
  const raw = store.get(LOCALE_COOKIE)?.value;
  return isLocale(raw) ? raw : defaultLocale;
});
