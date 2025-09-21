import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ChartCard from "./ChartCard";

const BarChartCard = ({ title="Project vs Actuals", data }) => {
  return (
    <ChartCard
      title={title}
      width="432px"
      height="252px"
      minWidth="400px"
      bgColor="rgba(247, 249, 251, 1)"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={24}>
          <CartesianGrid strokeWidth={0.18} vertical={false} stroke="#6B7280" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
            fill="rgba(168,197,218,1)"
            isAnimationActive={true}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default BarChartCard;
