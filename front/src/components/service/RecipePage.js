import React, { useState, useEffect } from "react";
import * as Api from "../../api";

import RecipePageTitle from "../service/RecipePageTitle";
// import Search from "../service/Search"
import ServiceRecipes from "./ServiceRecipes";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("test");
    // console.log(recipes);
    Api.get("recipes").then((res) => setRecipes(res.data));
    setLoading(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setKeyword(inputValue);

    Api.get("recipes")
      .then((res) => setRecipes(res.data))
      .then(() => {
        if (keyword.length > 0) {
          console.log(keyword);
          console.log(recipes);
          const newRecipes = recipes.filter((item) =>
            item.ingredients.includes(keyword)
          );
          console.log(newRecipes);
          setRecipes(newRecipes);
        }
      });
  };

  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <RecipePageTitle />
      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "50vh",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ inputValue }}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            color="inherit"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </Button>
        </Paper>
      </div>

      {/* Recipe Display */}
      <ServiceRecipes recipes={recipes} loading={loading} />
    </Container>
  );
}

export default RecipePage;
