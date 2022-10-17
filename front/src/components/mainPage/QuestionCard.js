import React from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Wrapper = styled("div")`
  position: relative;
  /* top: 270vh; */
  top: 2330px;
  margin-left: 200px;

  .text {
    font-size: 25px;
    font-family: NanumSquareRound;
    font-weight: 1000;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(30%);
    transition: all 2s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
`;

export default function QuestionCard() {
  useIntersectionObserver();

  return (
    <Wrapper>
      <Typography sx={{ overflow: "hidden" }} component="div">
        <div className="text hidden">
          "I want to be a vegetarian for the earth and for my body, but it's too
          hard"
        </div>
      </Typography>
    </Wrapper>
  );
}
