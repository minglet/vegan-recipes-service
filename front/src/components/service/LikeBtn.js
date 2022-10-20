import React, { useState, useContext, useEffect } from "react";
import { UserStateContext, DispatchContext } from "../../App";
import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
import * as Api from "../../api";
import { createRoutesFromChildren } from "react-router-dom";
import Grow from "@mui/material/Grow";
import Recommend from "./Recommend";

const Wrapper = styled("div")`
  .button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .recommend-container {
    position: fixed;
    top: 10vh;
    right: 155px;
    display: block;
  }

  .likeBtnImage {
    transition: all 300ms;
    &:active {
      transform: scale(1.2);
    }
    path {
      transition: all 500ms;
    }
  }
`;

export default function LikeBtn() {
  // like 버튼
  const [isLiked, setIsLiked] = useState(false);

  const userState = useContext(UserStateContext);

  const isLogin = !!userState.user;
  // console.log("userState.user : ", userState.user);
  // userId가 뜨네 ..

  const handleClick = () => {
    if (!isLogin) {
      // 로그인이 안되어있을 때 작동
      alert("You can save your favorite recipe when you log in!");
      return;
    }

    setIsLiked((pre) => !pre);
    if (!isLiked) {
      // 조아용 API 호출
      // Api.post("/",{})
    } else {
      // 안좋아용 API 호출
      // Api.post("",{)
    }

    // 데이터 현재 데이터 다시 로드 (결과 가 제대로 처리 됬는지 여부를 판단하기 위해...)
    //   useEffect(() => {
    //     Api.get("/", {})
    //   }, [])
    //   if (Likedata가 유저id와 같으면) {
    //     setIsLiked(true)
    //   }
  };
  // console.log("isLiked :", isLiked);

  return (
    <Wrapper>
      <div className="recommend-container">
        <Grow in={isLiked}>
          <Paper sx={{ border: "none" }} elevation={0} variant="outlined">
            <Recommend />
          </Paper>
        </Grow>
      </div>
      <Button
        className="button"
        onClick={() => {
          handleClick();
        }}
      >
        {
          <svg
            className="likeBtnImage"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              fill={isLiked ? "#d32f2f" : "#bdbdbd"}
            />
          </svg>
        }
      </Button>
    </Wrapper>
  );
}

<svg
  width="50"
  height="50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 512 512"
>
  <path
    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
    fill="#37474f"
  />
</svg>;
