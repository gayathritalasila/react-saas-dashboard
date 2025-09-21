import React from "react";

export default function ChartCard({
  title,
  children,
  width,
  height,
  minWidth,
  maxWidth,
  bgColor
}) {
  return (
    <div
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-[18px] p-[5px] shadow-sm`}
      style={{
        width,
        height,
        minWidth,
        maxWidth,
        background: bgColor,
      }}
    >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
          {title}
        </h3>
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
