import * as React from "react";
import PropTypes from "prop-types";
import MuiAppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import { useNavigate, useLocation, Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import theme from "../theme";

const AppBar = styled(MuiAppBar)`
  /* height: 80px;
  width: 100%; */
  .navbar-container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: red;
    z-index: 1;
  }

  .navbar {
    font-size: 20;
    font-family: NanumSquareRound;
    margin: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar .navbar-link,
  .logo {
    padding: 10px;
  }

  .logo {
    font-size: 30px;
    font-family: GangwonEdu-Bold;
  }

  .navbar-link {
  }
`;

const navBarTheme = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "large",
        color: "inherit",
      },
    },
  },
});

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  console.log(window.location.hostname);
  const serverUrl = "http://" + window.location.hostname + ":" + "3000" + "/";
  console.log(serverUrl);

  return (
    <ThemeProvider theme={deepmerge(theme, navBarTheme)}>
      <AppBar>
        <Toolbar>
          <Link to="/" className="logo">
            HaruHanKki
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Button variant="text" component={Link} to="/">
            소개말
          </Button> */}
          <Button variant="text" component={Link} to="#">
            Team
          </Button>
          <Button variant="text" component={Link} to="/recipes">
            Recipes
          </Button>
          <Button variant="text" component={Link} to="/user/login">
            SignIn
          </Button>
          <Button variant="text" component={Link} to="/user/register">
            SignUp
          </Button>

          {/* <Nav activeKey={location.pathname}>
              {/* <Nav.Link onClick={() => navigate("/register")}>회원가입</Nav.Link> */}

          {/* <p style={{ padding: 10 }}>로그인</p> */}
          {/* <Nav.Link style={{ padding: 10 }} onClick={() => navigate("/login")}>로그인</Nav.Link> */}
          {/* <p style={{ padding: 10 }}>회원가입</p> */}
          {/* </Nav> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
