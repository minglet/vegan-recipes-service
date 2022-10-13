import React, { useEffect, useState, useRef } from "react";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => {
        // console.log("unobserve => ", el);
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Wrapper>
      <Typography sx={{ overflow: "hidden" }} component="div">
        <div className="text hidden">
          "나도 지구를위해, 또 내 몸을 위해 채식을 하고 싶지만 너무 어려워요"
        </div>
      </Typography>
    </Wrapper>
  );
}
