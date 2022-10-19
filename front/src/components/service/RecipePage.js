import React, {useState, useEffect} from "react";
import * as Api from "../../api";

import RecipePageTitle from "../service/RecipePageTitle"
// import Search from "../service/Search"
import ServiceRecipes from "./ServiceRecipes";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import paper from "@mui/material/paper";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("radish");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(keyword);

    

  } 

  useEffect(() => {
    console.log("test");
    console.log(recipes);
    Api.get("recipes").then((res) => setRecipes(res.data));
    // setLoading(false);
  }, []);

  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <RecipePageTitle/>
      {/* Search Bar */}

      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
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
