import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export const useChangeTheme = () => useContext(ThemeContext);
