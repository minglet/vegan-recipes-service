import Pagination from "./Pagination";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LinearProgress from '@mui/material/LinearProgress';

function ServiceRecipes(recipes) {
  const selectedRecipes = recipes.recipes;

  const limit = 6;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {selectedRecipes.slice(offset, offset + limit).map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4}>
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
                alt="random"
                height="250px"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* 레시피 이름 */}
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid>
                  <Button size="small" color="inherit">
                    <Link to={`/recipes/current/${item._id}`}>VIEW</Link>
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedRecipes.length>0 ?(
        <Pagination
          total={selectedRecipes.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      ):(
        <>
          <h2>Loading...</h2>
          <LinearProgress color="inherit" />
        </>
      )}
    
    </Container>
  );
}

export default ServiceRecipes;
