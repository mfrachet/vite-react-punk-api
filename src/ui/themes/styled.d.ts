// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface ColorScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  export interface DefaultTheme {
    spacing: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    fs: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
    };

    weight: {
      bold: string;
      semibold: string;
    };

    colors: {
      main: string;
      secondary: string;
      text: ColorScale;
    };
    fontFamily: string;
    breakpoints: {
      md: number;
    };
  }
}
