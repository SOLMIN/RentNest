import { Global, css } from "@emotion/react";
import legacyCss from "./legacy.css?raw";

const baseStyles = (theme) => css`
  :root {
    --ink: ${theme.colors.ink};
    --muted: ${theme.colors.muted};
    --line: ${theme.colors.line};
    --paper: ${theme.colors.paper};
    --surface: ${theme.colors.surface};
    --teal: ${theme.colors.teal};
    --teal-dark: ${theme.colors.tealDark};
    --coral: ${theme.colors.coral};
    --blue: ${theme.colors.blue};
    --amber: ${theme.colors.amber};
    --plum: ${theme.colors.plum};
    --green-soft: ${theme.colors.greenSoft};
    --shadow: ${theme.shadow};
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`;

const legacyGlobalStyles = css`
  ${legacyCss}
`;

export default function GlobalStyles({ theme }) {
  return (
    <>
      <Global styles={baseStyles(theme)} />
      <Global styles={legacyGlobalStyles} />
    </>
  );
}
