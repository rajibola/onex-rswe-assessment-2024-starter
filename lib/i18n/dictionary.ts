import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  de: () => import("@/locales/de.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
