import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";
import ChartCard from "./ChartCard";

const LineChartCard = ({ data, title }) => {
    return (
        <ChartCard
            title={title}
            width="222px"
            height="428px"
            minWidth="562px"
            bgColor="rgba(247, 249, 251, 1)"
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeWidth={0.18} vertical={false} stroke="#6B7280" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false}
                        tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false}
                        tickLine={false} />
                    <Line
                        type="monotone"
                        dataKey="current"
                        stroke="rgba(168,197,218,1)"
                        strokeWidth={2}
                        dot={{ r: 3, strokeWidth: 1, fill: "rgba(168,197,218,1)" }}
                        activeDot={{ r: 5 }}
                        name="Current Week"
                    />
                    <Line
                        type="monotone"
                        dataKey="previous"
                        stroke="rgba(28,28,28,1)"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                        name="Previous Week"
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
};

export default LineChartCard;
