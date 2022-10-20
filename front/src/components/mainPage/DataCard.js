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
            Did you know that the amount of greenhouse gases we produce and
            distribute is enormous?
          </div>
        </Typography>
        <div className="chart-box hidden">
          <Chart />
        </div>
        <Typography>
          <div className="text hidden">
            As meat consumption increases and the size of the livestock industry
            increases,
            <br />
            our only planet is losing its vitality even more and more.
          </div>
        </Typography>
      </div>
    </Wrapper>
  );
}
