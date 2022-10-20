import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function RecipePageTitle() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            align="center"
            color="text.primary"
            gutterBottom
            style={{ fontFamily: "SBAggroB", fontSize: "50px" }}
          >
            Vegan Recipes
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {" "}
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default RecipePageTitle;
