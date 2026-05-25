import { ThemeProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import { theme } from "./theme";
import { muiTheme } from "./muiTheme";

export default function AppProviders({ children }) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
