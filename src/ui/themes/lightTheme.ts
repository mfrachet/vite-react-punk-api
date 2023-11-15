import { DefaultTheme } from "styled-components";
import {
  breakPointsTokens,
  fontFamilyTokens,
  fontSizeTokens,
  radiusTokens,
  spacingTokens,
  weightTokens,
} from "./tokens";

export const lightTheme: DefaultTheme = {
  spacing: spacingTokens,
  fs: fontSizeTokens,
  radius: radiusTokens,
  colors: {
    main: "#4338ca",
    secondary: "#db2777",
    text: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
  },
  weight: weightTokens,
  fontFamily: fontFamilyTokens,
  breakpoints: breakPointsTokens,
};
