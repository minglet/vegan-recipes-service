import React, { PureComponent, useMemo } from "react";
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

import data from "./data.json";

export default function Chart() {
  //   static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  // data 상위 5개 구하기 알고리즘
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
      .filter((_, index) => index < 5);
  }, [data]);

  //   console.log(_data);

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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Food product" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Land Use Change" stackId="a" fill="#8884d8" />
        <Bar dataKey="Feed" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Farm" stackId="a" fill="#8884d8" />
        <Bar dataKey="Processing" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Transport" stackId="a" fill="#8884d8" />
        <Bar dataKey="Packaging" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Retail" stackId="a" fill="#8884d8" />
        <Bar dataKey="Total from Land to Retail" stackId="a" fill="#82ca9d" />
        <Bar
          dataKey="Total Global Average GHG Emissions per kg"
          stackId="a"
          fill="#8884d8"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
