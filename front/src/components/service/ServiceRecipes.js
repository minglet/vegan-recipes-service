import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { dummy } from "../../recipeDummy";

export default function ServiceRecipes() {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
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
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                img_url={item.img_url}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  title={item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
