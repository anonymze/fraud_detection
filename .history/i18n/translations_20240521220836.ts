import langs from "./langs"
import { sprintf } from "@/utils/helper";
import { I18n } from "@/types/i18n";
import { getLocales } from "expo-localization";

const isValidI18n = (value: string | null): value is I18n => {
	// silly typing because includes only accept I18n values...
  return Object.values(I18n).includes(value as I18n);
}

const defaultLang = "en" as const;

const deviceLanguageCode = getLocales()[0]?.languageCode;
const validatedLanguage = isValidI18n(deviceLanguageCode) ? deviceLanguageCode : defaultLang;

const i18n: Record<I18n, (str: keyof typeof langs[I18n], ...args: string[]) => string> = {
	en: (str, ...args) => sprintf(langs.en[str], ...args),
	fr: (str, ...args) => sprintf(langs.fr[str], ...args),
};

const i18nDefault = i18n[validatedLanguage];

export { i18n, i18nDefault };