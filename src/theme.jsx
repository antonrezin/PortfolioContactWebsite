import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s, color 0.3s",
          "&:hover": {
            transform: "scale(1.2)",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          justifyItems: "center",
          padding: 3,
          width: "100%",
          maxWidth: "900px",
          marginTop: 4,
          backgroundColor: "transparent",
          border: "1px solid #3b3b3b",
          boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export default theme;
