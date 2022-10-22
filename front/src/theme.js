import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["NanumSquareRound", "Roboto", "snas-serif"].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: ["NanumSquareRound", "snas-serif"].join(","),
        },
      },
    },
  },
});

export default theme;
