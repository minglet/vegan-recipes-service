import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate, useLocation, Link } from "react-router-dom";


export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  console.log(window.location.hostname);
  const serverUrl =
  "http://" + window.location.hostname + ":" + "3000" + "/";
  console.log(serverUrl);

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
        <Link to= "/">하루한끼</Link>
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

            <div style={{ padding: 10 }} color = 'black'>
              <Link to= "/login">로그인</Link>
            </div>
            <div style={{ padding: 10 }} color = 'black'>
              <Link to= "/register">회원가입</Link>
            </div>

            {/* <Nav activeKey={location.pathname}>
              {/* <Nav.Link onClick={() => navigate("/register")}>회원가입</Nav.Link> */}
            
              {/* <p style={{ padding: 10 }}>로그인</p> */}
              {/* <Nav.Link style={{ padding: 10 }} onClick={() => navigate("/login")}>로그인</Nav.Link> */}
              {/* <p style={{ padding: 10 }}>회원가입</p> */}
            {/* </Nav> */} 
          </div>
        </div>
      </div>
    </div>
  );
}
