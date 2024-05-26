import langs from "./langs"
import { sprintf } from "@/utils/helper";
import type { I18n } from "@/types/i18n";
import { getLocales } from "expo-localization";

const defaultLang = "en" as const;
const deviceLanguageCode = getLocales()[0]?.languageCode;
const validatedLanguage = !deviceLanguageCode ? defaultLang : (deviceLanguageCode === "en") ? deviceLanguageCode : defaultLang;

const ok: I18n[number] = "r" as const;

console.log(deviceLanguageCode, validatedLanguage);

// if you add a new language, don't forget to add the svg in the assets flags folder
// otherwise await import()... will throw an "incontrollable" error
const i18n: Record<I18n, (str: keyof typeof langs[I18n], ...args: string[]) => string> = {
	en: (str, ...args) => sprintf(langs.en[str], ...args),
	fr: (str, ...args) => sprintf(langs.fr[str], ...args),
};

const i18nDefault = i18n[validatedLanguage];

export { i18n, i18nDefault };