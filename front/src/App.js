import "./App.css";
import Main from "./components/mainPage/Main";
import UserPage from "./components/myPage/userPage/UserPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* <UserPage /> */}
      <Main />
    </div>
  );
}

export default App;
