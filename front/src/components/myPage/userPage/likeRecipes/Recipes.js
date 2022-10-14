import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;

  .recipecard-container {
  }
`;

export default function Recipe() {
  return (
    <Wrapper>
      <div>{/* <h1>좋아하는 레시피 목록</h1> */}</div>

      <div className="recipecard-container">
        <RecipeCard />
      </div>
    </Wrapper>
  );
}
