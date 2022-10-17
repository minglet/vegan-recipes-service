import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceRecipes from "./components/service/ServiceRecipes";
import ServiceRecipeDetail from "./components/service/ServiceRecipeDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipe" element={<ServiceRecipes />} />
        <Route path="/recipe/id" element={<ServiceRecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
