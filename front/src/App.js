import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import NavBar from "./components/NavBar";
import Main from "./components/mainPage/Main";
// import UserPage from "./components/myPage/userPage/UserPage";
import Recipes from "./components/service/ServiceRecipes";
import LoginPage from "./components/user/LoginPage";
import RegisterPage from "./components/user/RegisterPage";
// import teamPage from "./components/user/TeamPage";

function App() {
  return (
    <Router>
      <NavBar/>
        <Routes>
      {/* <UserPage /> */}
        {/* <Main /> */}
        <Route path="/" element={<Main/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="/user/login" element={<LoginPage/>} />
        <Route path="/user/register" element={<RegisterPage/>} />
        {/* <Route path="/user/teamPage" element={<TeamPage/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
