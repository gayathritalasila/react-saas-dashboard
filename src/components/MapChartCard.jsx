import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import ChartCard from "./ChartCard";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function MapChartCard({
  title = "Revenue by Location",
  markers = [],
  locations = [],
}) {
  const maxValue = locations.length
    ? Math.max(...locations.map((l) => l.value))
    : 1;

  return (
    <ChartCard
      title={title}
      width="300px"
      minWidth="320px"
      className="flex flex-col"
      bgColor="rgba(247, 249, 251, 1)"
    >
      {/* World map */}
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 120 }}
        className="w-full h-40"
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E5E7EB"
                stroke="#D1D5DB"
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }, i) => (
          <Marker key={i} coordinates={coordinates}>
            <circle r={4} fill="rgba(28,28,28,1)" stroke="#fff" strokeWidth={3.5} />
          </Marker>
        ))}
      </ComposableMap>

      {/* Progress bars */}
      <div className="mt-[4px] space-y-[4px]">
        {locations.map((loc) => (
          <div key={loc.name}>
            <div className="flex justify-between text-sm text-gray-900 dark:text-gray-100">
              <span>{loc.name}</span>
              <span>{loc.value}K</span>
            </div>
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded">
              <div
                className="h-1 bg-blue-500 rounded"
                style={{
                  width: `${(loc.value / maxValue) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
