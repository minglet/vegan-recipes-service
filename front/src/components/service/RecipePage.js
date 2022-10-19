// import Pagination from "./Pagination";

import React from "react";

import ServiceRecipes from "./ServiceRecipes";
import Search from "../service/Search"

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

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
      
      <Search/>
      <ServiceRecipes/>
    </Container> 
      
  );
}

export default RecipePage;
