import React from "react";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  .start-btn {
    color: #000;
    font-size: 60px;
    font-family: NanumSquareRound;
    font-weight: 1000;

    margin: 60px;
    padding: 20px;
    /* border: 2px solid #cccccc;
    border-radius: 20px; */

    background-image: linear-gradient(to right, #4483ad, #4483ad 50%, #000 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 5px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
  }

  .start-btn:before {
    content: "";
    background: #4483ad;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  .start-btn:hover {
    cursor: pointer;
    background-position: 0;
  }

  .start-btn:hover::before {
    width: 100%;
  }
`;

export default function StartBtn() {
  return (
    <Wrapper>
      <p className="start-btn">시작하기</p>
    </Wrapper>
  );
}
