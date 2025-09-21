import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import { PieChart, Pie, Cell } from "recharts";

const PieChartCard = () => {
  // Chart data and colors from your Figma mock
  const data = [
    { name: "Direct", value: 300.56, color: "#1C1C1C" },
    { name: "Affiliate", value: 135.18, color: "#A3E4A2" },
    { name: "Sponsored", value: 154.02, color: "#8EA6FF" },
    { name: "E-mail", value: 48.96, color: "#B8E6FF" },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);
  const percentage = ((data[0].value / total) * 100).toFixed(1); // Direct %

  return (
    <div
      className="
        w-[250px] min-w-[250px] max-w-[272px] h-[344px]
        rounded-[16px] p-[26px] gap-4
         dark:bg-gray-800
         dark:border-gray-700
        shadow-sm flex flex-col items-center
      "
      style={{ background: 'var(--Primary-Light, rgba(247, 249, 251, 1))' }}
    >
      {/* Title */}
      <h2 className="font-inter font-semibold text-[14px] leading-[20px] text-gray-900 dark:text-gray-100 mb-4">
        Total Sales
      </h2>

      {/* Donut Chart */}
      <div className="relative w-[160px] h-[160px] mb-6">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={78}
            cornerRadius={40}
            paddingAngle={4}
            stroke="transparent"
          >
            {data.map((entry, idx) => (
              <Cell key={idx} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

      </div>

      {/* Legend with colored bullets */}
      <div className="flex flex-col gap-3 w-full mt-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center text-sm"
          >
            <div className="flex items-center gap-3">
              {/* Colored circle */}
              <CircleIcon style={{ width: 12, height: 12, marginRight: 12, color: item.color }} />
              <span className="text-gray-700 dark:text-gray-200">
                {item.name}
              </span>
            </div>
            <span className="text-gray-900 dark:text-gray-100">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartCard;
