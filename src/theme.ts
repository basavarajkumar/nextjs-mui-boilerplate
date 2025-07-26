"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  typography: {
    // fontFamily: "var(--font-roboto)",
    fontFamily: "Inter, sans-serif",
  },
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#00a09b",
      // light: '',
      // dark: '',
      // contrastText: ''
    },
    secondary: {
      main: "#00a09b",
      // light: '',
      // dark: '',
      // contrastText: ''
    },
    text: {
      primary: "#000000",
      secondary: "#111326",
    },
  },
  // custom vars
  drawer: {
    open: "#96f7e4",
  },
});

export default theme;
