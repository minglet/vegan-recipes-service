import { dummy } from "../../recipeDummy";
import ServiceRecipe from "./ServiceRecipe";
import { Link } from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function ServiceRecipes() {
  return (
    /*<div>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <ServiceRecipe
              title={item.title}
              ingredients={item.ingredients}
              img_url={item.img_url}
            />
          );
        })}
      </div>
    </div>*/
    <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {dummy.results.map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia component="img" image={item.img_url} alt="random" />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* 레시피 이름 */}
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid xs="6">
                  <Button size="small" color="inherit">
                    <Link to={`/recipe/${item.title}`}>보러가기</Link>
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServiceRecipes;
