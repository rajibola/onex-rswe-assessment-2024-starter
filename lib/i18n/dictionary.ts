import "server-only";
import { Locale } from ".";

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
  "hi-IN": () => import("@/locales/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
