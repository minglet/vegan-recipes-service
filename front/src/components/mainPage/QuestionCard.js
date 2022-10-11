import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: relative;
  top: 263vh;
  margin-left: 200px;

  .text {
    font-size: 25px;
    font-family: NanumSquareRound;
    font-weight: 1000;
  }
`;

export default function QuestionCard() {
  return (
    <Wrapper>
      <Typography>
        <div className="text">
          "나도 지구를위해, 또 내 몸을 위해 채식을 하고 싶지만 너무 어려워요"
        </div>
      </Typography>
    </Wrapper>
  );
}
