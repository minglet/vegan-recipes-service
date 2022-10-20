import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  width: 900px;
  height: 450px;

  .like-recipe-text {
    display: inline-block;
    background-color: #ffffff;
    transform: translate(-300px, -32px);
    padding: 0 10px 0 10px;
  }
`;

export default function Blank() {
  return (
    <Wrapper>
      <Typography variant="h4">
        You don't have a favorite recipe yet!
      </Typography>
    </Wrapper>
  );
}
