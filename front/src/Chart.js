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

import * as Api from "../src/api";

export default function Chart() {
  // graph 그리는 json data 불러오는 알고리즘
  const [graph, setgraph] = useState([]);
  useEffect(() => {
    Api.get("graphs").then((res) => setgraph(res.data));
  }, []);

  // data 상위 7개 구하기 알고리즘
  const _data = useMemo(() => {
    return graph
      .map((it) => {
        let totalCount = 0;
        Object.keys(it).forEach((t2) => {
          const numCheck = Number(it[t2]);
          if (typeof numCheck === "number" && !isNaN(numCheck)) {
            totalCount = totalCount + numCheck;
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
  }, [graph]);
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
        <YAxis domain={["auto", "auto"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total from Land to Retail" stackId="a" fill="#37474f" />
        <Bar dataKey="Farm and Feed" stackId="a" fill="#455a64" />
        <Bar dataKey="Land Use Change" stackId="a" fill="#546e7a" />

        <Bar dataKey="Processing" stackId="a" fill="#607d8b" />
        <Bar dataKey="Transport" stackId="a" fill="#78909c" />
        <Bar dataKey="Packaging" stackId="a" fill="#90a4ae" />
        <Bar dataKey="Retail" stackId="a" fill="#b0bec5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
