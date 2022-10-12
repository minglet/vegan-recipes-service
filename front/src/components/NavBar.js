import React from "react";

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
        <p>팀소개</p>
        <p>레시피보러가기</p>
        <p>로그인</p>
        <p>회원가입</p>
      </div>
    </Wrapper>
  );
}
