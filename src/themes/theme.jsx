import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "monospace",
    h3: {
      fontSize: "2rem",
      color: "#ffffff",
      "@media (max-width: 768px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontSize: "1.75rem",
      color: "#ffffff",
      "@media (max-width: 768px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      color: "#ffffff",
      lineHeight: 1.6,
      "@media (max-width: 768px)": {
        lineHeight: 1.5,
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "1rem",
      color: "#ffffff",
      "@media (max-width: 768px)": {
        fontSize: "0.875rem",
      },
    },
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
          overflow: "hidden",
          "@media (max-width: 768px)": {
            padding: "10px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: "10px",
          padding: "10px",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "3rem",
          transition: "transform 0.3s ease, color 0.3s ease",
          "&:hover": {
            transform: "scale(1.2)",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
