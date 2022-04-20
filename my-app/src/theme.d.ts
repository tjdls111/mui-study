import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    light: {
      fontColor: string;
      bgColor: string;
    };
    dark: {
      fontColor: string;
      bgColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    light?: {
      fontColor: string;
      bgColor: string;
    };
    dark?: {
      fontColor: string;
      bgColor: string;
    };
  }

  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
