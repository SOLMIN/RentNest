import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  spacing: 8,
  palette: {
    mode: "light",
    primary: { main: "#1E1E1E" },
    secondary: { main: "#D9C6A5" },
    success: { main: "#1f8b5f" },
    warning: { main: "#b97816" },
    background: { default: "#FAFAFA", paper: "#ffffff" },
    text: { primary: "#1E1E1E", secondary: "#6a6a6a" },
    divider: "rgba(20,33,32,0.10)",
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
    h4: { fontWeight: 800, letterSpacing: 0, lineHeight: 1.1 },
    h5: { fontWeight: 760, letterSpacing: 0, lineHeight: 1.15 },
    h6: { fontWeight: 720, letterSpacing: 0, lineHeight: 1.2 },
    subtitle1: { fontWeight: 670, letterSpacing: 0 },
    body1: { letterSpacing: 0 },
    body2: { letterSpacing: 0 },
    button: { textTransform: "none", fontWeight: 700, letterSpacing: 0 },
  },
  shadows: [
    "none",
    "0 1px 2px rgba(20,33,32,0.08)",
    "0 3px 12px rgba(20,33,32,0.10)",
    "0 8px 24px rgba(20,33,32,0.10)",
    ...Array(21).fill("0 10px 30px rgba(20,33,32,0.10)"),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(180deg, rgba(247,247,241,0.98), rgba(239,246,242,0.92) 55%, rgba(247,247,241,1))",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(20,33,32,0.08)",
          borderRadius: 12,
          boxShadow: "0 2px 10px rgba(20,33,32,0.04)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: "1px solid rgba(20,33,32,0.08)",
          boxShadow: "0 1px 6px rgba(20,33,32,0.04)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          minHeight: 38,
          paddingInline: 14,
        },
        containedPrimary: {
          background: "#1E1E1E",
          "&:hover": { background: "#111111" },
        },
        outlined: {
          borderColor: "rgba(20,33,32,0.18)",
          "&:hover": { borderColor: "rgba(20,33,32,0.32)", background: "rgba(20,33,32,0.03)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 650,
        },
        outlined: {
          borderColor: "rgba(20,33,32,0.14)",
          background: "rgba(255,255,255,0.72)",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          borderColor: "rgba(20,33,32,0.12)",
          paddingInline: 12,
          minHeight: 38,
          "&.Mui-selected": {
            backgroundColor: "rgba(8,123,108,0.14)",
            color: "#07584f",
            borderColor: "rgba(8,123,108,0.34)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(20,33,32,0.16)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(20,33,32,0.28)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#087b6c",
            borderWidth: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          "--DataGrid-containerBackground": "#ffffff",
        },
        columnHeaders: {
          background: "rgba(20,33,32,0.04)",
          borderBottom: "1px solid rgba(20,33,32,0.10)",
        },
        row: {
          "&:hover": {
            backgroundColor: "rgba(8,123,108,0.05)",
          },
        },
      },
    },
  },
});
