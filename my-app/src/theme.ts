import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     light: {
//       fontColor: "black",
//       bgColor: "white",
//     },
//     dark: {
//       fontColor: "white",
//       bgColor: "black",
//     },
//   },
// });
const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

export default theme;
