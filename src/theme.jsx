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
  },
});

export default theme;
