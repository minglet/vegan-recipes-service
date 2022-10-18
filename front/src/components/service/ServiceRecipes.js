import Pagination from "./Pagination";

import React, { useState, useEffect } from "react";
import * as Api from "../../api";

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
import Spinner from "./Spinner";

function ServiceRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Api.get("recipes").then((res) => setRecipes(res.data));
    setLoading(false);
  }, []);

  const limit = 6;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <Container
          className="like-recipe-container"
          sx={{ py: 8 }}
          maxWidth="md"
        >
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
              ></Stack>
            </Container>
          </Box>
          {/* End hero unit */}
          <Grid container spacing={4}>
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
      )}
    </Container>
  );
}

export default ServiceRecipes;
