import React from "react";

export default function NavBar() {
  return (
    <div
      className="navbar-container"
      style={{
        height: 80,
        width: 1920,
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          fontSize: 30,
          fontFamily: "GangwonEdu-Bold",
          marginLeft: 50,
        }}
      >
        하루한끼
      </div>
      <div
        className="navbar"
        style={{
          fontSize: 20,
          fontFamily: "NanumSquareRound",
          // display: "flex",
          margin: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ padding: 10 }}>소개말</p>
            <p style={{ padding: 10 }}>팀소개</p>
            <p style={{ padding: 10 }}>레시피보러가기</p>
          </div>
          <div style={{ display: "flex" }}>
            <p style={{ padding: 10 }}>로그인</p>
            <p style={{ padding: 10 }}>회원가입</p>
          </div>
        </div>
      </div>
    </div>
  );
}
