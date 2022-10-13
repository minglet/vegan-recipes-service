import React from "react";
import { Button } from "@mui/material";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;

  .user-edit-btn {
    font-family: NanumSquareRound;
  }
`;

export default function UserEditBtn() {
  return (
    <Wrapper>
      <Button className="user-edit-btn" variant="outlined">
        회원정보 수정
      </Button>
    </Wrapper>
  );
}
