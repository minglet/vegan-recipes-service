import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/mainPage/Main";
import NavBar from "./components/NavBar";
import LoginPage from "./components/user/LoginPage";
import RegisterPage from "./components/user/RegisterPage";

function App() {
  return (
    <div>
      <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />

            {/* <Route path="/users/:userId" element={<Portfolio />} /> */}
          </Routes>
      </Router>

    </div>
  );
}

export default App;

