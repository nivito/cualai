import { es, type I18n } from "./es";
import { en } from "./en";
import type { Tool, Category } from "@/data/tools";

export type Locale = "es" | "en";

const dictionaries: Record<Locale, I18n> = { es, en };

export function getDict(locale: Locale = "es"): I18n {
  return dictionaries[locale];
}

export function getLocalizedTool(tool: Tool, locale: Locale) {
  return {
    description: locale === "en" && tool.descriptionEn ? tool.descriptionEn : tool.description,
    longDescription: locale === "en" && tool.longDescriptionEn ? tool.longDescriptionEn : tool.longDescription,
  };
}

export function getLocalizedCategory(cat: Category, locale: Locale) {
  return locale === "en" && cat.nameEn ? cat.nameEn : cat.name;
}

export type { I18n };
