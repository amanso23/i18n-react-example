export const languages = {
  es: "Spanish",
  en: "English",
  de: "German",
} as const;

export const { VITE_DEFAULT_LANG: defaultLang } = import.meta.env;
