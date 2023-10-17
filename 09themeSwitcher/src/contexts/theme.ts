import { createContext, useContext } from "react";
import { THEME_LIGHT } from "../constants";

const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
