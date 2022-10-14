import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceRecipes from "./components/service/ServiceRecipes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<ServiceRecipes />} />
        <Route path="/recipes/current/:recipeId" element={<ServiceRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
