import React, { PureComponent, useState, useMemo, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import * as Api from "../../../api";
import data from "./data.json";

// console.log(data);

export default function Chart() {
  const [graph, setgraph] = useState([]);
  useEffect(() => {
    Api.get("graphs").then((res) => setgraph(res.data));
  }, []);
  // console.log(graph);

  // data 상위 7개 구하기 알고리즘
  const _data = useMemo(() => {
    return data
      .map((it) => {
        let totalCount = 0;
        Object.keys(it).forEach((t2) => {
          if (typeof it[t2] === "number") {
            totalCount = totalCount + it[t2];
          }
        });
        return {
          ...it,
          totalCount: totalCount,
        };
      })
      .sort((a1, a2) => {
        return a2.totalCount - a1.totalCount;
      })
      .filter((_, index) => index < 7);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={_data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="15 0" />
        <XAxis dataKey="Food product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          name="토지 이용"
          dataKey="Land Use Change"
          stackId="a"
          fill="#8884d8"
        />
        <Bar
          name="농장 및 사료"
          dataKey="Farm and Feed"
          stackId="a"
          fill="#82ca9d"
        />
        {/* <Bar dataKey="Farm" stackId="a" fill="#8884d8" /> */}
        <Bar name="처리" dataKey="Processing" stackId="a" fill="#82ca9d" />
        <Bar name="운송" dataKey="Transport" stackId="a" fill="#8884d8" />
        <Bar name="포장" dataKey="Packaging" stackId="a" fill="#82ca9d" />
        <Bar name="소매" dataKey="Retail" stackId="a" fill="#8884d8" />
        <Bar
          name="토지부터 소매 총액"
          dataKey="Total from Land to Retail"
          stackId="a"
          fill="#82ca9d"
        />
        {/* <Bar
          dataKey="Total Global Average GHG Emissions per kg"
          stackId="a"
          fill="#8884d8"
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
