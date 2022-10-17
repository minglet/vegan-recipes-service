import React from "react";
import { Link, Typography } from "@mui/material";
import StartBtn from "./StartBtn";
import styled from "@emotion/styled";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Wrapper = styled("div")`
  position: relative;
  /* top: 270vh; */
  top: 2600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .text {
    font-size: 27px;
    font-family: NanumSquareRound;
    font-weight: 1000;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(100%);
    transition: all 2s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`;

export default function ProposalCard() {
  useIntersectionObserver();

  return (
    <Wrapper>
      <div className="hidden">
        <Typography
          style={{
            fontSize: 30,
          }}
        >
          <div className="text" style={{ marginBottom: 80 }}>
            You don't have to be completely vegetarian from the start!
          </div>
          <div className="text">
            Let's start with the ingredients in the refrigerator
          </div>
        </Typography>

        <StartBtn />
      </div>
    </Wrapper>
  );
}
