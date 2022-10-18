import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function Search() {

    const [keyword, setKeyword] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        return (

          <Container className="like-recipe-container" sx={{ py: 8 }} maxWidth="md">
            <Box>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="keyword"
                label="keyword"
                type="keyword"
                id="keyword"
                autoComplete="off"
                value={keyword}
                // onChange={(e) => setKeyword(e.target.value)}
              /> 
              <Button>
                SEARCH
              </Button>
            </Box>
          </Container>
      );
  }
}

export default Search;