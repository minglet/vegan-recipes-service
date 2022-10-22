import "./App.css";
import * as Api from "./api";
import { loginReducer } from "./reducer";

import React, { useState, useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Box, CircularProgress, ThemeProvider } from "@mui/material";
// import theme from "./theme";

import NavBar from "./components/NavBar";
import Main from "./components/mainPage/Main";
import UserPage from "./components/myPage/userPage/UserPage";
import Recipes from "./components/service/RecipePage";
// import myPage from "./components/myPage/userPage/likeRecipes/Recipes";
import ServiceRecipeDetail from "./components/service/ServiceRecipeDetail";
import LoginPage from "./components/user/LoginPage";
import RegisterPage from "./components/user/RegisterPage";
import UserEditPage from "./components/myPage/userEditPage/UserEditPage";
// import Search from "./components/service/Search";
import TeamPage from "./components/TeamPage/TeamPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  // useReducer 훅을 통해 userState 상태와 dispatch함수를 생성함.
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  // 아래의 fetchCurrentUser 함수가 실행된 다음에 컴포넌트가 구현되도록 함.
  // 아래 코드를 보면 isFetchCompleted 가 true여야 컴포넌트가 구현됨.
  const [isFetchCompleted, setIsFetchCompleted] = useState(false);

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const res = await Api.get("user/current");
      const currentUser = res.data;

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });

      console.log("%c sessionStorage에 토큰 있음.", "color: #d93d1a;");
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
    // fetchCurrentUser 과정이 끝났으므로, isFetchCompleted 상태를 true로 바꿔줌
    setIsFetchCompleted(true);
  };

  // useEffect함수를 통해 fetchCurrentUser 함수를 실행함.
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!isFetchCompleted) {
    return null;
  }

  return (
    // <ThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider value={userState}>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route
                path="/recipes/current/:recipeId"
                element={<ServiceRecipeDetail />}
              />
              <Route path="/Users" element={<UserPage />} />
              <Route path="/users/:id" element={<UserEditPage />} />
              <Route path="/user/login" element={<LoginPage />} />
              <Route path="/user/register" element={<RegisterPage />} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </Router>
        </UserStateContext.Provider>
      </DispatchContext.Provider>
    // </ThemeProvider>
  );
}

export default App;
