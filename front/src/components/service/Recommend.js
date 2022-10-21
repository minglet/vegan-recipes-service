import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as Api from "../../api";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  /* position: fixed; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  width: 200px;
`;

export default function Recommend() {
  // 추천카드한개 api 가져오기
  const cards = [1];

  const { recipeId } = useParams();
  // console.log(recipeId);
  const [recommendCard, setRecommendCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    Api.get(`recipes/current/${recipeId}/rec`).then((res) => { 
      setRecommendCard(res.data);
      setLoading(false);
    })
  }, []);
  if(recommendCard){ console.log(loading + '추천 페이지' + recipeId + '추천된 페이지 id : ' + recommendCard._id)}
  
  return (
    <Wrapper>
      <Grid item key={cards}>
        <Typography>How about this recipe?</Typography>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {recommendCard && (
            <>
              <CardMedia
                component="img"
                image={recommendCard.img_url}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* 레시피 이름 */}
                  {recommendCard.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid xs="6">
                  <Button 
                    size="small" 
                    color="inherit"
                    component = {Link} to = {`/recipes/current/${recommendCard._id}`}
                  >
                    VIEW
                  </Button>
                </Grid>
              </CardActions>
            </>
          )}
        </Card>
      </Grid>
    </Wrapper>
  );
}
