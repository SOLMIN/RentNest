import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import { theme } from "./theme";

export default function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeProvider>
  );
}
