import React from "react";
import WeekCard from "./WeekCard";

const tempTypes = ["C", "F"];

export default function WeekInfo({
  weather,
  temperatureType,
  setTemperatureType,
}) {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <h2 className="font-semibold pb-2">Week</h2>
        <div className="flex gap-2">
          {tempTypes.map((type, index) => (
            <div
              onClick={() => {
                setTemperatureType(type);
              }}
              key={index}
              className={`select-none cursor-pointer text-sm shadow font-semibold rounded-full w-8 h-8 flex items-center justify-center ${
                type === temperatureType
                  ? "bg-black text-white"
                  : "bg-white shadow"
              } `}
            >
              °{type}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-7 flex-1 mt-4 gap-2">
        {weather.daily.slice(0, 7).map((item, index) => (
          <WeekCard
            key={index}
            weatherDay={item}
            index={index}
            temperatureType={temperatureType}
          />
        ))}
      </div>
    </div>
  );
}
