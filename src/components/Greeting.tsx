import { useEffect, useState } from "react";
import { useLang } from "../hooks/use-lang";
import { translate } from "../utils/translate";

export function Greeting() {
  const { lang } = useLang();
  const [greetingMessage, setGreetingMessage] = useState("");

  const t = translate(lang);
  const { greeting } = t;

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour <= 14) {
      setGreetingMessage(greeting.morning);
    } else if (currentHour > 14 && currentHour <= 19) {
      setGreetingMessage(greeting.late);
    } else {
      setGreetingMessage(greeting.night);
    }
    document.documentElement.lang = lang;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return <h1>{greetingMessage}</h1>;
}
