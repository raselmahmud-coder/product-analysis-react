import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
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
          <h1 className="text-center lg:text-3xl font-semibold">
            Sell VS Revenue
          </h1>
          <BarChart
            width={500}
            height={300}
            data={chart}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
            barSize={10}
          >
            <XAxis
              dataKey="month"
              scale="point"
              padding={{ left: 5, right: 5 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sell" fill="#8884d8" background={{ fill: "#8884d8" }} />
            <Bar dataKey="revenue" fill="#ed82ea"/>
          </BarChart>
        </div>
        <div className="w-full overflow-hidden xl:my-4 xl:px-4 xl:w-1/2">
          <h1 className="text-center lg:text-3xl font-semibold">
            Sell VS Revenue VS Investment
          </h1>
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
          <MyShape />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
