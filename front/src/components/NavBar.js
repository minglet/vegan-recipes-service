import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  height: 80px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #ffffff;

  .logo {
    font-size: 30px;
    font-family: "GangwonEdu-Bold";
    margin-left: 50px;
  }

  .navbar {
    display: flex;
    margin-right: 50px;
  }
  .navbar p {
    font-size: 20px;
    font-family: NanumSquareRound;
    padding: 10px;
  }
`;

export default function NavBar() {
  return (
    <Wrapper>
      <div className="logo">하루한끼</div>
      <div className="navbar">
        <p>소개말</p>
        <p><Link to= "/teamPage">팀소개</Link></p>
        <p><Link to= "/recipes">레시피보러가기</Link></p>
        <p><Link to= "/user/login">로그인</Link></p>
        <p><Link to= "/user/register">회원가입</Link></p>
      </div>
    </Wrapper>
  );
}
