import React, { useState, useContext, useEffect } from "react";
import { UserStateContext, DispatchContext } from "../../App";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import * as Api from "../../api";
import { createRoutesFromChildren } from "react-router-dom";

const Wrapper = styled("div")`
  .button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default function LikeBtn() {
  const [isLiked, setIsLiked] = useState(false);

  const userState = useContext(UserStateContext);

  const isLogin = !!userState.user;
  console.log("userState.user : ", userState.user);
  // userId가 뜨네 ..

  const onClick = () => {
    if (!isLogin) {
      // 로그인이 안되어있을 때 작동
      alert("You can save your favorite recipe when you log in!");
      return;
    }

    setIsLiked((pre) => !pre);
    if (!isLiked) {
      // 조아용 API 호출
    } else {
      // 안좋아용 API 호출
    }

    // 데이터 현재 데이터 다시 로드 (결과 가 제대로 처리 됬는지 여부를 판단하기 위해...)
  };
  console.log(isLiked);

  /*
    로그인 상태에서 좋아요를 누르면 -> 마이페이지에 내가 좋아한 레시피가 뜸
    좋아요를 누르면 새로고침해도 좋아요인 상태로 있어야겠지 ?

    만약에 isLogin !== null 인 상태에서 isLiked가 true가 된다면 ?
    그 페이지에 있는 레시피카드를 myPage에 갖고오는것 !

    그리고 로그인이 되어있지 않은 상태에서 좋아요를 누르면
    alert로 "로그인시 좋아하는 레시피를 저장할 수 있어요!" 를 띄우고
    다음에할게요랑 로그인하러 가기 버튼
    if (isLogin === null) {
      alert("로그인 시 좋아하는 레시피를 저장할 수 있어요!")
    }
  */

  return (
    <Wrapper>
      <Button
        className="button"
        onClick={() => {
          // onClickLike();
          onClick();
        }}
      >
        {isLiked ? (
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              fill="#d32f2f"
            />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              fill="#bdbdbd"
            />
          </svg>
        )}
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
