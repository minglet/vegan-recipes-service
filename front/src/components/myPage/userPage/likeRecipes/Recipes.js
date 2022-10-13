import React from "react";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

export default function Recipes() {
  return (
    <Wrapper>
      <div>내가 좋아하는 레시피</div>
    </Wrapper>
  );
}   
