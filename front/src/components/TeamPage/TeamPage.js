import * as React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

import hd from "../../img/hd.png";
import ma from "../../img/ma.png";
import hj from "../../img/hj.png";
import jh from "../../img/jh.png";
import bk from "../../img/bk.png";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  text-align: center;
  /* top: 300px; */

  .card-container {
    margin: 20vh 20px 0 20px;
  }
`;

export default function TeamPage() {
  return (
    <Wrapper>
      <Card className="card-container" sx={{ width: 300, height: 500 }}>
        <CardMedia component="img" alt="Jihye" height="200" image={jh} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizzie
          </Typography>
          <Typography variant="body2" color="text.secondary">
            2_2wisdom
          </Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
}
