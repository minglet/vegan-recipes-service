import { useState, useContext } from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Search() {

    const [keyword, setKeyword] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log(keyword);

    } 
      return (
        <Grid container spacing={2}>
          <Box onSubmit={handleSubmit}>
            <Grid item xs={8}>
                  <TextField
                    variant="outlined"
                    // margin="normal"
                    // required
                    fullWidth
                    name="keyword"
                    label="keyword"
                    // type="keyword"
                    id="keyword"
                    // autoComplete="off"
                    value={keyword}
                    // inputProps={keyword}
                    onChange = {(e) => setKeyword(e.target.value)}
                  /> 
            </Grid>
            {/* <Grid item xs={2}>
              <Button
                type = "submit"
                variant="outlined"
                color="inherit"
                size = "large"
                value = {keyword}
                onClick = {(e) => setKeyword(e.target.value)}
                >
                SEARCH
              </Button>
            </Grid> */}
          </Box>
        </Grid>
          
      );
}

export default Search;