import { useState } from "react";
import { LangContext } from "./langContext";
import { defaultLang, languages } from "../const";

type LangProviderProps = {
  children: React.ReactElement;
};

export function LangProvider({ children }: LangProviderProps) {
  const [lang, setLang] = useState<keyof typeof languages>(
    defaultLang as keyof typeof languages
  );

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
