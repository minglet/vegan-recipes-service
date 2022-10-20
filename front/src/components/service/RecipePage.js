import React, {useState, useEffect} from "react";
import * as Api from "../../api";

import RecipePageTitle from "../service/RecipePageTitle"
// import Search from "../service/Search"
import ServiceRecipes from "./ServiceRecipes";

import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function RecipePage() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  
 
  useEffect(() => {
    Api.get("recipes").then((res) => {
                                       setAllRecipes(res.data);
                                       setRecipes(res.data);
                                      })
    setLoading(false);
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecipes = allRecipes.filter((item) => item.ingredients.includes(keyword))
    setRecipes(newRecipes);
  } 

  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <RecipePageTitle/>
      {/* Search Bar */}

      <Paper
        onSubmit={handleSubmit}   // enter로 검색 가능
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "50vh" }}
        
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          // inputProps={{ inputValue }}
          onChange={(e)=> setKeyword(e.target.value)}
        />
        <Button 
          type="button" 
          sx={{ p: '10px' }} 
          aria-label="search"
          color="inherit"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </Button>
      </Paper>

      {/* Recipe Display */}
        <ServiceRecipes 
          recipes = {recipes}
          loading = {loading}
        />

        
    </Container> 
      
  );
}

export default RecipePage;
