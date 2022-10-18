import Pagination from "./Pagination";

import React, { useState, useMemo, useEffect } from "react";
import * as Api from "../../api";

import ServiceRecipe from "./ServiceRecipe";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { Skeleton } from "@mui/material";

function useRecipes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await Api.get("recipes");
      setData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
}

function ServiceRecipes() {
  const { data: recipes, loading } = useRecipes();

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
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
          {loading ? (
            <Skeleton height={90} />
          ) : (
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Vegan Recipes
            </Typography>
          )}

          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ></Stack>
        </Container>
      </Box>
      {/* End hero unit */}
      <Grid container spacing={4}>
        {recipes.length === 0 && loading ? (
          new Array(3).fill(true).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="rectangular" height={250} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="rectangular" height={60} />
                <Skeleton variant="rounded" height={60} />
              </Stack>
            </Grid>
          ))
        ) : (
          <>
            {recipes.slice(offset, offset + limit).map((item) => (
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
                    <Grid xs="6">
                      <Button size="small" color="inherit">
                        <Link to={`/recipes/current/${item._id}`}>VIEW</Link>
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </>
        )}
      </Grid>

      <footer>
        <Pagination
          total={recipes.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Container>
  );
}

export default ServiceRecipes;
