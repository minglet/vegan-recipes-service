// import Pagination from "./Pagination";

import React, { useState, useMemo, useEffect } from "react";
import * as Api from "../../api";

import ServiceRecipes from "./ServiceRecipes";
import Search from "../service/Search"
// import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';

function RecipePage() {

  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Vegan Recipes
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          > </Stack>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Search/>
      </Box>
        <ServiceRecipes/>
    </Container> 
      
  );
}

export default RecipePage;
