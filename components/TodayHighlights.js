import React from "react";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import TodayCard from "./TodayCard";
import { formatTime } from "../utils/hooks";

export default function TodayHighlights({ weather }) {
  const sunrise = formatTime(weather.current.sunrise, weather.timezone);
  const sunset = formatTime(weather.current.sunset, weather.timezone);

  return (
    <div className="row-span-2 w-full flex flex-col">
      <h2 className="font-semibold pb-4">Today's Highlights</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
        <TodayCard title="UV Index">
          <div
            style={{
              "--percentageRotate":
                (Math.round(weather.current.uvi) / 12) * 180,
            }}
            className="flex flex-col items-center mt-6 relative"
          >
            <div className="chart">
              <div></div>
            </div>
            <span className="absolute text-2xl bottom-0 font-semibold right-1/2 translate-x-1/2">
              {Math.round(weather.current.uvi)}
            </span>
          </div>
        </TodayCard>

        <TodayCard title="Wild Status">
          <div className="py-4">
            <span className="font-semibold text-3xl">
              {weather.current.wind_speed}
            </span>
            <span className="font-medium ml-2">km/h</span>
          </div>
          <div className="font-bold text-gray-700 text-xs">WSW</div>
        </TodayCard>

        <TodayCard title="Sunrise & Sunset">
          <div className="py-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <BsFillSunriseFill color="#FFDD4A" size={34} />
              <span className="font-medium">
                {sunrise.getHours()}:{sunrise.getMinutes()} AM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <BsFillSunsetFill color="#FFDD4A" size={34} />
              <span className="font-medium">
                {sunset.getHours() % 12 || 12}:{sunset.getMinutes()} PM
              </span>
            </div>
          </div>
        </TodayCard>

        <TodayCard title="Humidity">
          <div className="py-4 flex">
            <span className="font-semibold text-3xl">
              {weather.current.humidity}
            </span>
            <span className="font-medium ml-2">%</span>
          </div>
        </TodayCard>

        <TodayCard title="Visibility">
          <div className="py-4">
            <span className="font-semibold text-3xl">
              {weather.current.visibility / 1000}
            </span>
            <span className="font-medium ml-2">km</span>
          </div>
        </TodayCard>

        <TodayCard title="Dew Point">
          <div className="py-4">
            <span className="font-semibold text-3xl">
              {weather.current.dew_point}
            </span>
          </div>
        </TodayCard>
      </div>
    </div>
  );
}
