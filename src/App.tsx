import "./App.css";
import { Greeting } from "./components/Greeting";
import { SelectLanguage } from "./components/SelectLanguage";
import { LangProvider } from "./contexts/langProvider";

function App() {
  return (
    <LangProvider>
      <>
        <Greeting />
        <SelectLanguage />
      </>
    </LangProvider>
  );
}

export default App;
