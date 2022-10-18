import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import hd from "../../img/hd.png";
import ma from "../../img/ma.png";
import hj from "../../img/hj.png";
import jh from "../../img/jh.png";
import bk from "../../img/bk.png";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  text-align: center;
`;

export default function TeamPage() {
  return (
    <Wrapper>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={jh}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JI HYE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <IconButton aria-label="GitHubIcon"></IconButton>
              <IconButton aria-label="EmailIcon"></IconButton>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
}
