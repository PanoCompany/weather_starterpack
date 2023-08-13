import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import TodayHighlights from "./TodayHighlights";
import TodayInfo from "./TodayInfo";
import WeekInfo from "./WeekInfo";

export default function App() {
  const [weather, setWeather] = useState(null);

  const [query, setQuery] = useState("Paris");
  const [queryDebouce] = useDebounce(query, 500);
  const [loading, setLoading] = useState(true);

  const [temperatureType, setTemperatureType] = useState("C");

  //EFFECT
  useEffect(() => {
    if (!query) {
      return;
    }

    const URL = `https://ngoc.fly.dev/weather?city=${query}`;

    setLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        setWeather(res);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        setWeather(null);
        setLoading(false);
      });
  }, [queryDebouce]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-[rgba(37,48,65,0.7)] z-10 flex items-center justify-center text-white text-2xl">
          Loading...
        </div>
      )}
      {weather && (
        <div className="w-[1024px] h-[630px] bg-[#F6F6F8] rounded-3xl shadow flex">
          <TodayInfo
            query={query}
            setQuery={setQuery}
            weather={weather}
            temperatureType={temperatureType}
          />

          <div className="p-8 grid grid-rows-3 w-full gap-8">
            <WeekInfo
              weather={weather}
              temperatureType={temperatureType}
              setTemperatureType={setTemperatureType}
            />
            <TodayHighlights weather={weather} />
          </div>
        </div>
      )}
    </>
  );
}
