import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "white",
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*, *::before, *::after": {
          boxSizing: "content-box",
        },
      },
    },
  },
  props: {
    // MuiButton: {
    //   color: "white",
    // },
    MuiLink: {
      underline: "none",
    },
  },
});
export default theme;
