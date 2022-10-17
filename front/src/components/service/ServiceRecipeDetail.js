import React from "react";

import Image from "mui-image";

import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

const Wrapper = styled("div")`
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .image-container {
    margin: 20px;
  }

  .name-container {
    margin: 50px;
  }
`;

function ServiceRecipeDetail() {
  return (
    <Wrapper>
      <div className="image-container">
        <Image
          src="https://picsum.photos/500/500"
          height="500px"
          width="500px"
        />
      </div>
      <div className="name-container">
        <Typography variant="h3">요리 이름</Typography>
      </div>
      {/* <div className="btn-container">
        <Button variant="outlined" size="small">
          재료
        </Button>
        <Button variant="outlined" size="small">
          레시피
        </Button>
      </div> */}
    </Wrapper>
  );
}
export default ServiceRecipeDetail;
