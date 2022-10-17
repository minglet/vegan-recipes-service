import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["NanumSquareRound"].join(","),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontFamily: ["NanumSquareRound"].join(","),
        },
      },
    },
  },
});

export default theme;
