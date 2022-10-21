import React, { useState, useContext, useEffect, useMemo } from "react";
import { UserStateContext, DispatchContext } from "../../App";
import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";
import * as Api from "../../api";
import { createRoutesFromChildren, useParams } from "react-router-dom";
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

function useScraps() {
  const [scraps, setScraps] = useState([]);
  const [lastUpdate, setLastUpdate] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get(`scraps`);
      setScraps(res.data);
    };
    fetchData();
  }, [lastUpdate]);

  return {
    data: scraps,
    refetch: () => {
      setLastUpdate(new Date().getTime());
    },
  };
}

export default function LikeBtn() {
  const [loading, setLoading] = useState(true);
  const { data: scraps, refetch } = useScraps();

  const userState = useContext(UserStateContext);

  // 로그인 상태
  const isLogin = !!userState.user;

  const { recipeId } = useParams();

  const isScrap = useMemo(() => {
    return scraps.some((it) => it._id === recipeId);
  }, [scraps, recipeId]);
  console.log('스크랩됨?' + isScrap);

  const toggleLike = async (e) => {
    if (!isLogin) {
      // 로그인이 안되어있을 때 작동
      alert("You can save your favorite recipe when you log in!");
      return;
    }
    // 로그인이 되었을 때 작동
    const res = await Api.put(`scrap/addscrap/${recipeId}`);
    refetch();
    setLoading(false);
  };

  return (
    <Wrapper>
      <Button
        className="button"
        onClick={() => {
          toggleLike();
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
              fill={isScrap ? "#d32f2f" : "#bdbdbd"}
            />
          </svg>
        }
      </Button>
      {(isScrap || !loading)? (
        <div className="recommend-container">
        <Grow in={isScrap}>
          <Paper sx={{ border: "none" }} elevation={0} variant="outlined">
            
              <Recommend/>
            
          </Paper>
        </Grow>
      </div>
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
