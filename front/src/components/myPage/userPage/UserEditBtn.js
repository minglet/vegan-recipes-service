import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { UserStateContext, DispatchContext } from "../../../App";

import * as Api from "../../../api";

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
  const userState = useContext(UserStateContext);

  // console.log("userState.user : ", userState.user);
  // console.log("userId", userState.user.id);

  return (
    <Wrapper>
      <Button
        component={Link}
        to={`/users/${userState.user.id}`}
        className="user-edit-btn"
        variant="outlined"
        color="inherit"
      >
        edit profile
      </Button>
    </Wrapper>
  );
}
