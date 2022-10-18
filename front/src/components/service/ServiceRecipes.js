import Pagination from "./Pagination";

import React, { useState, useMemo, useEffect } from "react";
import * as Api from "../../api";

import ServiceRecipe from "./ServiceRecipe";
import Search from "../service/Search"
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function ServiceRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [keyword, setKeyword] = useState("beetroot");

  useEffect(() => {
    Api.get("recipes").then((res) => setRecipes(res.data));
  }, []);

  // const test = ["Mike", "Jenny", "Aim"].filter(item => item.includes("e"))
  // console.log(test);
  
  if (keyword.length > 0) {
      // console.log(keyword, recipes.slice(0, 3));
      const newRecipes 
            = recipes.filter((item) => item.ingredients.includes(keyword))  
      console.log(newRecipes);  
      setRecipes(newRecipes);
      // setKeyword("");
  }
  // setKeyword("");
  console.log(recipes);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {recipes.slice(offset, offset + limit).map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia component="img" image={item.img_url} alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* 레시피 이름 */}
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid xs="6">
                  <Button size="small" color="inherit">
                    <Link to={`/recipes/current/${item._id}`}>VIEW</Link>
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <footer>
        <Pagination
          total={recipes.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Container>
  );
}

export default ServiceRecipes;
