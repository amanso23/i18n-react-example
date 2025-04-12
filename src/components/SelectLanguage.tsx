import { languages } from "../const";
import { useLang } from "../hooks/use-lang";

export function SelectLanguage() {
  const { setLang } = useLang();
  const options = Object.keys(languages) as Array<keyof typeof languages>;

  return (
    <select
      onChange={({ target }) => setLang(target.value as keyof typeof languages)}
    >
      {options.map((key) => (
        <option key={key} value={key}>
          {languages[key]}
        </option>
      ))}
    </select>
  );
}
