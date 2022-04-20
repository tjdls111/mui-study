import { Theme, ThemeOptions } from "@mui/material";

// declare module "@mui/material/styles" {
//   interface Palette {
//     light: {
//       fontColor: string;
//       bgColor: string;
//     };
//     dark: {
//       fontColor: string;
//       bgColor: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface CustomThemeOptions extends ThemeOptions {
//     light?: {
//       fontColor: string;
//       bgColor: string;
//     };
//     dark?: {
//       fontColor: string;
//       bgColor: string;
//     };
//   }

//   export function createTheme(options?: CustomThemeOptions): CustomTheme;
// }

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
