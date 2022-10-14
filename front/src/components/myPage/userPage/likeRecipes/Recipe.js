import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "@emotion/styled";

const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;

function useData() {
  const [data, setData] = useState([]);
  const [lastUpdatedAt, setLastUpdatedAt] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos`
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [lastUpdatedAt]);

  return {
    data,
    reload: () => {
      setLastUpdatedAt(new Date().getTime());
    },
  };
}

function useDetail(id) {
  const [data, setData] = useState();
  const [lastUpdatedAt, setLastUpdatedAt] = useState();

  const fetchData = async (id) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    setData(data);
  };
  useEffect(() => {
    if (!id) {
      return;
    }
    fetchData(id);
  }, [lastUpdatedAt, id]);

  return {
    data,
    reload: () => {
      setLastUpdatedAt(new Date().getTime());
    },
  };
}

export default function RecipeCard() {
  const [id, setId] = useState();

  const { data, reload } = useData();

  const { data: detailData } = useDetail(id);

  return (
    <div>
      {/* <button onClick={() => reload()}>Reload</button> */}

      <ul>
        {data.map((it) => (
          <li key={it.id}>
            <button load={() => setId(it.id)}>{it.title}</button>
          </li>
        ))}
      </ul>

      {detailData && (
        <div>
          <h1>detail</h1>
          <a href="{detailData.url">{detailData.url}</a>
          <img src={detailData.thumbnailUrl} alt="" />
        </div>
      )}
    </div>
  );
}
