import { cache } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/types";

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  si: () => import("./dictionaries/si").then((m) => m.default),
  ta: () => import("./dictionaries/ta").then((m) => m.default),
  he: () => import("./dictionaries/he").then((m) => m.default),
};

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => loaders[locale]());
