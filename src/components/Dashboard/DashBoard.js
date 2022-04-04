import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useChart } from "../../hooks/useProducts";
import Legendary from "./Legendary";
import MyShape from "./renderActiveShape";

const DashBoard = () => {
  const [chart] = useChart();
  return (
    <>
      <div className="flex flex-wrap overflow-hidden xl:mx-4">
        <div className="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                dataKey="sell"
                isAnimationActive={false}
                data={chart}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Pie
                dataKey="revenue"
                data={chart}
                cx={500}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <h1 className="text-center text-3xl font-semibold">Line Chart</h1>
          <LineChart width={600} height={400} data={chart}>
            <Line dataKey={"sell"} />
            <Line dataKey={"revenue"} />
            <Line dataKey={"investment"} />
            <XAxis dataKey={"month"} />
            <YAxis dataKey={"sell"} />
            <Tooltip />
          </LineChart>
        </div>
        <div className="w-full overflow-hidden xl:my-8 xl:px-4 xl:w-1/2">
      <Legendary />
        </div>
        <div className="w-full overflow-hidden xl:my-8 xl:px-4 xl:w-1/2">
      <MyShape/>

        </div>
      </div>
    </>
  );
};

export default DashBoard;
