import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blank from "./Blank";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import * as Api from "../../../../api";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  .like-recipe-container {
    width: 805px;
    padding: 20px 70px 60px 70px;
    border: 2px solid #cccccc;
    border-radius: 50px;
    /* box-shadow: 5px 2px 15px #cccccc; */
  }

  .like-recipe-text {
    display: inline-block;
    background-color: #ffffff;
    transform: translate(-300px, -32px);
    padding: 0 10px 0 10px;
  }
`;

function useScraps() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await Api.get("scraps");
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
  };
}

export default function RecipeCard() {
  //좋아요한 레시피 배열
  // const [recipes, setRecipes] = useState([]);

  // 좋아요 한 레시피 Api
  const { data: recipes = [] } = useScraps();

  // 상태가 false이면 Blank페이지, true면 좋아요한 레시피가 뜸
  // const [favorite, setFavorite] = useState(false);

  // if (recipes === []) {
  //   setFavorite(true);
  //   return;
  // }
  // return setFavorite(false);

  // 좋아하는 레시피 삭제버튼
  // const deleteRecipe = async () => {
  //   Api.put(`users/unscrap/${recipeId}`);
  // };

  const favorite = recipes.length > 0;

  console.log("favorite :", favorite);

  return (
    <Wrapper>
      <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
        <Typography className="like-recipe-text">My favorite recipe</Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {favorite ? (
            recipes.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img_url}
                    height="250px"
                  />
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
                    <Grid xs="6">
                      <Button
                        size="small"
                        color="inherit"
                        // onClick={deleteRecipe}
                      >
                        DELETE
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Blank />
          )}
        </Grid>
      </Container>
    </Wrapper>
  );
}
