import React from "react";
import { Typography } from "@mui/material";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .user {
    margin: 150px 0 30px 0;
    font-family: NanumSquareRound;
    font-size: 80px;
  }
`;

export default function UserName() {
  const userName = "HaruHanKki Fan";
  return (
    <Wrapper>
      <Typography className="user" variant="h2">
        {userName}
      </Typography>
    </Wrapper>
  );
}
