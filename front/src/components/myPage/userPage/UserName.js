import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

import styled from "@emotion/styled";

import * as Api from "../../../api";

const Wrapper = styled("div")`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .user {
    margin: 150px 0 30px 0;
    font-family: SBAggroB;
    font-size: 50px;
  }
`;

export default function UserName() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Api.get("user/current").then((res) => setUser(res.data));
  }, []);

  return (
    <Wrapper>
      {user && (
        <Typography
          className="user"
          variant="h2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          {user.name}
        </Typography>
      )}
    </Wrapper>
  );
}
