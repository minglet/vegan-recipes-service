import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Main from "./components/mainPage/Main";
import ServiceRecipes from "./components/service/ServiceRecipes";
import ServiceRecipeDetail from "./components/service/ServiceRecipeDetail";
import LoginPage from "./components/user/LoginPage";
import RegisterPage from "./components/user/RegisterPage";
import UserPage from "./components/myPage/userPage/UserPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recipes" element={<ServiceRecipes />} />
        <Route
          path="/recipes/current/:recipeId"
          element={<ServiceRecipeDetail />}
        />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<RegisterPage />} />
        <Route path="/users/:userId" element={<UserPage />} />

        {/* <Route path="/user/teamPage" element={<TeamPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
