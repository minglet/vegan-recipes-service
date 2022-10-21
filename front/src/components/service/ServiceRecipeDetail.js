import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";
import { useParams } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import styled from "@emotion/styled";

import * as Api from "../../api";

const Wrapper = styled(Container)`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 100px;

  .image-container {
    top: 100px;
    margin: 20px;
  }

  .second-line-container {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 100%;
    /* margin: 30px; */
  }

  .like-btn-container {
    margin: 30px;
  }

  .ingredients-container,
  .preparation-container {
    margin-bottom: 100px;
  }
`;

export default function ServiceRecipeDetail() {
  console.log('detail page 들어옴');
  const { recipeId } = useParams();
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    if (!recipeId) return;
    // get요청res를 setState로 !
    Api.get(`recipes/current/${recipeId}`).then((res) => setrecipes(res.data));
    console.log('바뀜x')                                       
  }, [recipeId]);

  return (
    <Wrapper maxWidth="md">
      <div className="image-container">
        <CardMedia component="img" image={recipes.img_url} />
      </div>
      <div className="second-line-container">
        <div className="name-container">
          <Typography variant="h3">{recipes.title}</Typography>
        </div>
        <div className="like-btn-container">
          <LikeBtn />
        </div>
      </div>

      <div className="ingredients-container">
        <Typography variant="h5">Ingredients</Typography>
        <Typography>{recipes.ingredients}</Typography>
      </div>
      <div className="preparation-container">
        <Typography variant="h5">Preparation</Typography>
        <Typography>{recipes.preparation}</Typography>
      </div>
    </Wrapper>
  );
}
