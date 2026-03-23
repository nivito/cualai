import { es, type I18n } from "./es";
import { en } from "./en";

export type Locale = "es" | "en";

const dictionaries: Record<Locale, I18n> = { es, en };

export function getDict(locale: Locale = "es"): I18n {
  return dictionaries[locale];
}

export type { I18n };
