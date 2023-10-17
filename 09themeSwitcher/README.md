# React + TypeScript | Theme Switcher

This project is a straightforward theme-switching application. It changes the CSS class of the root HTML element between "light" and "dark" to switch themes, causing the Tailwind styles to adapt accordingly. To manage the theme state, a "themeContext" has been established, which includes an initial theme value and a function for toggling the theme.

```ts
const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_LIGHT,
  toggleTheme: () => {},
});
```

Additionally, a custom hook has been created to export the `useContext` hook, along with the context and its corresponding provider:

```ts
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
```

Inside the `app.tsx` file, the theme state and its related functionality have been declared, and the entire application is wrapped with the provider:

```ts
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
      ...your application code here
    </ThemeProvider>
  );
};
```

In this code, "THEME_LIGHT" and "THEME_DARK" constants are used instead of magic strings to improve code professionalism. These constants are defined in a separate file named "constants.ts":

```ts
export const THEME_LIGHT: ThemeType = "light";
export const THEME_DARK: ThemeType = "dark";
```

The code snippets and CSS styles used in this project are provided by [Hitesh Choudhary](https://github.com/hiteshchoudhary/), available in his GitHub repository [chai-aur-react](https://github.com/hiteshchoudhary/chai-aur-react).
