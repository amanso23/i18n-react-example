import { languages } from "../const";
import es from "../i18n/es.json";
import en from "../i18n/en.json";
import de from "../i18n/de.json";

export const translate = (lang: keyof typeof languages) => {
  switch (lang) {
    case "es":
      return es;
    case "en":
      return en;
    case "de":
      return de;
  }
};
