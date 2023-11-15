import { createContext } from "react";

export type ThemeContextType = () => void;

export const ThemeContext = createContext<ThemeContextType>(() => undefined);
