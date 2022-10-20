import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import styled from "@emotion/styled";
import { Paper } from "@mui/material";

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
          <CardMedia
            component="img"
            image="https://picsum.photos/300/300"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {/* 레시피 이름 */}
              TITLE
            </Typography>
          </CardContent>
          <CardActions>
            <Grid xs="6">
              <Button size="small" color="inherit">
                VIEW
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Wrapper>
  );
}
