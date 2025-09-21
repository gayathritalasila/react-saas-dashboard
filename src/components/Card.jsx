import React, { useState } from "react";
import TrendUpIcon from "../assets/TrendUpIcon";
import TrendDownIcon from "../assets/TrendDownIcon";

const Card = ({ title, value, change, bgColor, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const isPositive = change.startsWith("+");

  return (
    <div
      className={`
        w-[202px] h-[112px]
        p-[6px] rounded-[18px]
        dark:border-gray-700
        shadow-sm flex flex-col justify-between
        ${!bgColor ? "bg-white dark:bg-gray-900" : ""}
      `}
      style={bgColor ? { backgroundColor: bgColor } : {}}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Title */}
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
        {title}
      </h3>

      {/* When hovered, swap value and change */}
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {hovered ? change : value}
        </span>

        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium">
            {hovered ? value : change}
          </span>
          {!hovered && (
            isPositive ? (
              <TrendUpIcon className="w-5 h-5" />
            ) : (
              <TrendDownIcon className="w-5 h-5" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
