import { useEffect, useState } from "react";
import { Card, ThemeBtn } from "./components";
import { ThemeProvider } from "./contexts/theme";
import { THEME_DARK, THEME_LIGHT } from "./constants";

const App = () => {
  const [theme, setTheme] = useState<ThemeType>(THEME_LIGHT);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEME_DARK ? THEME_LIGHT : THEME_DARK));
  };

  useEffect(() => {
    const html = document.querySelector<HTMLHtmlElement>("html")!;
    html.classList.remove(THEME_LIGHT, THEME_DARK);
    html.classList.add(theme);
  }, [theme]);
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
