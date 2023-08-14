import React from "react";
import { useTemperature, useWeekDay } from "../utils/hooks";

export default function WeekCard({ weatherDay, index, temperatureType }) {
  const today = new Date().getDay();
  const day = useWeekDay(today + index);

  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col items-center">
      <h4 className="py-1 text-sm font-medium">{day}</h4>
      <img
        src={`https://ngoc.fly.dev/${weatherDay.weather[0].icon}.svg`}
        className="w-[70%] aspect-square"
      />
      <div className="flex justify-center gap-2">
        <span className="font-semibold">
          {useTemperature(weatherDay.temp.day, temperatureType)}°
        </span>
        <span className="font-semibold text-gray-400">
          {useTemperature(weatherDay.temp.night, temperatureType)}°
        </span>
      </div>
    </div>
  );
}
