import React from "react";
import WeekCard from "./WeekCard";

export default function WeekInfo() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between">
        <h2 className="font-semibold pb-2">Week</h2>
        <div className="flex gap-2">
          <div className="cursor-pointer text-sm shadow font-semibold rounded-full w-8 h-8 flex items-center justify-center bg-black text-white">
            °C
          </div>
          <div className="cursor-pointer text-sm shadow font-semibold rounded-full w-8 h-8 flex items-center justify-center bg-white ">
            °F
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 flex-1 mt-4 gap-2">
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
        <WeekCard />
      </div>
    </div>
  );
}
