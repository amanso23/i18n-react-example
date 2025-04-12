import { createContext } from "react";
import { defaultLang, languages } from "../const";

type LangContextProps = {
  lang: keyof typeof languages;
  setLang: React.Dispatch<React.SetStateAction<keyof typeof languages>>;
};

export const LangContext = createContext<LangContextProps>({
  lang: defaultLang as keyof typeof languages,
  setLang: () => {},
});
