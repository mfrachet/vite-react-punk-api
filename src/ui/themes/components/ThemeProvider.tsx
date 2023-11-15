import { ThemeProvider as SThemeProvider } from "styled-components";
import { lightTheme } from "../lightTheme";
import { darkTheme } from "../darkTheme";
import { useState } from "react";
import { ThemeType } from "../types";
import { ThemeContext } from "./ThemeContext";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const getLocalTheme = (): ThemeType => {
  const initialTheme = localStorage.getItem("theme");

  return initialTheme === "light" ? "light" : "dark";
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(getLocalTheme());

  const changeTheme = () => {
    setTheme((theme) => {
      const nextTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={changeTheme}>
      <SThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </SThemeProvider>
    </ThemeContext.Provider>
  );
};
