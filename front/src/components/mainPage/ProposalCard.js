import React, { useState, useEffect } from "react";
import { Link, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: relative;
  top: 270vh;
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

  .start-btn {
    color: #000;
    font-size: 23px;
    font-family: NanumSquareRound;
    font-weight: 1000;

    margin: 60px;
    padding: 20px;
    border: 2px solid #cccccc;
    border-radius: 20px;
  }
`;

export default function ProposalCard() {
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
        console.log("unobserve => ", el);
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Wrapper>
      <div className="hidden">
        <Typography
          style={{
            fontSize: 30,
          }}
        >
          <div className="text" style={{ marginBottom: 80 }}>
            처음부터 완전히 채식일 필요는 없어요!
          </div>
          <div className="text">일단 냉장고에 있는 재료들로 시작해볼까요?</div>
        </Typography>
        {/* <FontAwesomeIcon icon="fa-light fa-earth-asia" /> */}
        <p className="start-btn">시작하기</p>
      </div>
    </Wrapper>
  );
}
