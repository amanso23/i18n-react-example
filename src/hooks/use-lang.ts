import { useContext } from "react";
import { LangContext } from "../contexts/langContext";

export const useLang = () => useContext(LangContext);
