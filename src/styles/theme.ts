import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#A82441",
    },
    secondary: {
      main: "#F7C5CC",
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      // fontSize: "2.9rem",
    },
    body1: {
      fontSize: "2rem",
    },
    htmlFontSize: 10,
    // fontSize: 18,
  },
});
