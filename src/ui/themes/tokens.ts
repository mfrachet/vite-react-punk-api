import { DefaultTheme } from "styled-components";

export const spacingTokens: DefaultTheme["spacing"] = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
};

export const fontSizeTokens: DefaultTheme["fs"] = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "4rem",
};

export const radiusTokens: DefaultTheme["radius"] = {
  sm: "4px",
  md: "12px",
  lg: "20px",
};

export const weightTokens: DefaultTheme["weight"] = {
  bold: "800",
  semibold: "600",
};

export const fontFamilyTokens: DefaultTheme["fontFamily"] = `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"`;

export const breakPointsTokens: DefaultTheme["breakpoints"] = {
  md: 768,
};
