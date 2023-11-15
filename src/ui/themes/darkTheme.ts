import { DefaultTheme } from "styled-components";
import {
  breakPointsTokens,
  fontFamilyTokens,
  fontSizeTokens,
  radiusTokens,
  spacingTokens,
  weightTokens,
} from "./tokens";

export const darkTheme: DefaultTheme = {
  spacing: spacingTokens,
  fs: fontSizeTokens,
  radius: radiusTokens,
  colors: {
    main: "#c7d2fe",
    secondary: "#e9d5ff",
    text: {
      50: "#0f172a",
      100: "#1e293b",
      200: "#334155",
      300: "#475569",
      400: "#64748b",
      500: "#94a3b8",
      600: "#cbd5e1",
      700: "#e2e8f0",
      800: "#f1f5f9",
      900: "#f8fafc",
    },
  },
  weight: weightTokens,
  fontFamily: fontFamilyTokens,
  breakpoints: breakPointsTokens,
};
