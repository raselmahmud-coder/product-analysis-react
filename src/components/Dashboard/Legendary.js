import React, { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useChart } from "../../hooks/useProducts";

const Legendary = () => {
  const [opacity, setOpacity] = useState({
    sell: 1,
    revenue: 1,
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );
  const [charts] = useChart();
  return (
    <>
      <LineChart
        width={500}
        height={300}
        data={charts}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          strokeOpacity={opacity.revenue}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="investment"
          strokeOpacity={opacity.investment}
          stroke="#82ca9d"
        />
      </LineChart>
    </>
  );
};

export default Legendary;
