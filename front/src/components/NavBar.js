import React, { useContext } from "react";
// import PropTypes from "prop-types";
import MuiAppBar from "@mui/material/AppBar";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Toolbar,
  // Typography,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import { useNavigate, Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import styled from "@emotion/styled";
import theme from "../theme";

import { UserStateContext, DispatchContext } from "../App";

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

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem("userToken");
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: "LOGOUT" });
    // 기본 페이지로 돌아감.
    navigate("/");
  };

  return (
    <ThemeProvider theme={deepmerge(theme, navBarTheme)}>
      <AppBar>
        <Toolbar>
          <Link to="/" className="logo">
            Just One Meal
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Button variant="text" component={Link} to="/team">
            Team
          </Button>
          <Button variant="text" component={Link} to="/recipes">
            Recipes
          </Button>
          {isLogin ? (
            <Button variant="text" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button variant="text" component={Link} to="/user/login">
              Login
            </Button>
          )}
          {isLogin ? (
            <Button variant="text" component={Link} to="/userPage">
              My Page
            </Button>
          ) : (
            <Button variant="text" component={Link} to="/user/register">
              Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
