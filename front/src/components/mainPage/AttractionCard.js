import React from "react";
import { Typography } from "@mui/material";

import "./main.css";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .attraction-typo-content {
    max-width: 40ch;
    text-align: center;
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }

  .attraction-typo-content span {
    font-family: "SBAggroB";
    font-weight: 1000;
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }

  .attraction-typo-content span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(5) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(6) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  .attraction-typo-content span:nth-child(7) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
    margin-top: 80px;
  }
`;

export default function AttractionCard() {
  return (
    <Wrapper>
      <Typography
        variant="h1"
        style={{
          fontSize: 40,
        }}
      >
        <div className="attraction-typo-content">
          <span>A meal&nbsp;</span>
          <span>for&nbsp;</span>
          <span>the&nbsp;</span>
          <span>earth&nbsp;</span>
          <span>today,</span>
          <br />
          <span>Shall we get started?</span>
        </div>
      </Typography>
    </Wrapper>
  );
}
