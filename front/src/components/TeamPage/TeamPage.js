import * as React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

import hd from "../../img/hd.png";
import ma from "../../img/ma.png";
import hj from "../../img/hj.png";
import jh from "../../img/jh.png";
import bk from "../../img/bk.png";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  /* top: 300px; */

  .card-container {
    margin: 0 20px 0 20px;
  }

  .team-member {
    /* margin: 10vh 0 0 0; */
    display: flex;
  }

  .team-title {
    margin: 20vh 0 50px 0;
  }

  .team-title h1 {
    font-family: SBAggroB;
    font-size: 50px;
    color: #263238;
  }

  .img {
    height: 200px;
    margin-top: 25px;
  }

  .icon {
    margin-right: 10px;
  }

  .icon-text-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
  }

  .box {
    display: inline-block;
    padding: 3px 9px;
    border-radius: 7px;
    margin-bottom: 15px;
  }

  .frontend {
    background-color: #b0c2ef;
  }

  .backend {
    background-color: #ffbe40;
  }

  .reader {
    background-color: #dbb0ef;
  }
`;

export default function TeamPage() {
  return (
    <Wrapper>
      <div className="team-title">
        <h1>Windows11</h1>
      </div>

      <div className="team-member">
        <Card className="card-container" sx={{ width: 300, height: 450 }}>
          <CardMedia className="img" component="img" image={hd} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              HD
            </Typography>
            <div className="box reader" style={{ marginRight: 10 }}>
              TeamReader
            </div>
            <div className="box frontend">Frontend</div>
            <div className="icon-text-container">
              <GitHubIcon className="icon" />
              <Typography variant="body2">
                <a href="" target="_blank">
                  github.com/
                </a>
              </Typography>
            </div>
            <div className="icon-text-container">
              <EmailIcon className="icon" />
              <Typography variant="body2">
                <a href="mailto:">@gmail.com</a>
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className="card-container" sx={{ width: 300, height: 450 }}>
          <CardMedia className="img" component="img" image={ma} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              MA
            </Typography>
            <div className="box backend">Backend</div>
            <div className="icon-text-container">
              <GitHubIcon className="icon" />
              <Typography variant="body2">
                <a href="" target="_blank">
                  github.com/
                </a>
              </Typography>
            </div>
            <div className="icon-text-container">
              <EmailIcon className="icon" />
              <Typography variant="body2">
                <a href="mailto:">@gmail.com</a>
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className="card-container" sx={{ width: 300, height: 450 }}>
          <CardMedia className="img" component="img" image={hj} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              HJ
            </Typography>
            <div className="box backend">Backend</div>
            <div className="icon-text-container">
              <GitHubIcon className="icon" />
              <Typography variant="body2">
                <a href="" target="_blank">
                  github.com/
                </a>
              </Typography>
            </div>
            <div className="icon-text-container">
              <EmailIcon className="icon" />
              <Typography variant="body2">
                <a href="mailto:">@gmail.com</a>
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className="card-container" sx={{ width: 300, height: 450 }}>
          <CardMedia className="img" component="img" image={jh} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              JiHye
            </Typography>
            <div className="box frontend">frontend</div>
            <div className="icon-text-container">
              <GitHubIcon className="icon" />
              <Typography variant="body2">
                <a href="https://github.com/2wisdom" target="_blank">
                  github.com/2wisdom
                </a>
              </Typography>
            </div>
            <div className="icon-text-container">
              <EmailIcon className="icon" />
              <Typography variant="body2">
                <a href="mailto:leejihye7117@gmail.com">
                  leejihye7117@gmail.com
                </a>
              </Typography>
            </div>
          </CardContent>
        </Card>

        <Card className="card-container" sx={{ width: 300, height: 450 }}>
          <CardMedia className="img" component="img" image={bk} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              BK
            </Typography>
            <div className="box frontend">Frontend</div>
            <div className="icon-text-container">
              <GitHubIcon className="icon" />
              <Typography variant="body2">
                <a href="" target="_blank">
                  github.com/
                </a>
              </Typography>
            </div>
            <div className="icon-text-container">
              <EmailIcon className="icon" />
              <Typography variant="body2">
                <a href="mailto:">@gmail.com</a>
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </Wrapper>
  );
}
