import React, { useEffect, useState } from "react";
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

export default function RecipeCard() {
  const [recipes, setrecipes] = useState([]);
  useEffect(() => {
    Api.get("recipes").then((res) => setrecipes(res.data));
  }, []);

  return (
    <Wrapper>
      <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
        <Typography className="like-recipe-text">My favorite recipe</Typography>
        {/* End hero unit */}
        <Grid container spacing={4}>
          {recipes.map((item) => (
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
                      VIEW
                    </Button>
                  </Grid>
                  <Grid xs="6">
                    <Button size="small" color="inherit">
                      DELETE
                    </Button>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
