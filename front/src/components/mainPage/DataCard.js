import React from "react";
import { Typography } from "@mui/material";

import Chart from "../../Chart";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  position: absolute;
  top: 1700px;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .chart-box {
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .text {
    font-size: 23px;
    font-family: NanumSquareRound;
    font-weight: 1000;
  }

  .hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 2s;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }

  .text:nth-child(2) {
    transition-delay: 200ms;
  }
`;

export default function DataCard() {
  useIntersectionObserver();

  return (
    <Wrapper>
      <div>
        <Typography>
          <div className="text hidden">
            우리가 먹는 식품들을 생산하고 유통하는데 만들어지는 온실가스량이
            어마어마하다는 사실, 알고 계신가요?
          </div>
        </Typography>
        <div className="chart-box">
          <Chart />
        </div>
        <Typography>
          <div className="text hidden">
            고기소비가 많아지고 축산업 규모가 더욱 커지면서 우리의 하나뿐인
            지구는 더더욱 생명력을 잃고있어요.
          </div>
        </Typography>
      </div>
    </Wrapper>
  );
}
