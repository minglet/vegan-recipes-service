import React, { useState, useEffect } from "react";
import { Button, Grid, Stack, Typography, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

import * as Api from "../../api";

const Wrapper = styled("div")`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .image-container {
    margin: 20px;
  }

  .name-container {
    margin: 50px;
  }

  .second-line-container {
    display: flex;
    /* flex-direction: row; */
    text-align: center;
    align-items: center;
    justify-content: space-between;
    width: 700px;
  }

  .scroll-btn {
    margin: 10px;
  }

  .ingredients-container,
  .preparation-container {
    margin-bottom: 1000px;
  }
`;

export default function ServiceRecipeDetail() {
  return (
    <Wrapper>
      <div className="image-container">
        <CardMedia
          component="img"
          height="auto"
          width="600px"
          image="https://picsum.photos/500/500"
        />
      </div>
      <div className="second-line-container">
        <div className="name-container">
          <Typography variant="h3">title</Typography>
        </div>
        <div className="btn-container">
          <Link
            activeClass="active"
            to="ingredients-scroll-btn"
            spy={true}
            smooth={true}
          >
            <Button
              // id="ingredients-btn"
              className="ingredients-scroll-btn"
              variant="outlined"
              size="small"
            >
              Ingredients
            </Button>
          </Link>
          <Link>
            <Button
              className="preparation-scroll-btn"
              variant="outlined"
              size="small"
            >
              Preparation
            </Button>
          </Link>
        </div>
      </div>

      <div className="ingredients-container">
        <Typography variant="h5">Ingredients</Typography>
      </div>
      <div className="preparation-container">
        <Typography variant="h5">Preparation</Typography>
      </div>
    </Wrapper>
  );
}
