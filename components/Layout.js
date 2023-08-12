import React, { useState } from "react";
import TodayHighlights from "./TodayHighlights";
import TodayInfo from "./TodayInfo";
import WeekInfo from "./WeekInfo";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-[1024px] h-[630px] bg-[#F6F6F8] rounded-3xl shadow flex">
      <TodayInfo />

      <div className="p-8 grid grid-rows-3 w-full gap-8">
        <WeekInfo />
        <TodayHighlights />
      </div>
    </div>
  );
}
