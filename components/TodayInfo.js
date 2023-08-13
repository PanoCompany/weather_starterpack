import { BiSearch } from "react-icons/bi";
import { useTemperature, useWeekDay } from "../utils/hooks";
import { useTime } from "react-timer-hook";

export default function TodayInfo({
  query,
  setQuery,
  weather,
  temperatureType,
}) {
  const d = new Date().getDay();
  const day = useWeekDay(d);

  const { minutes, hours, ampm } = useTime({ format: "12-hour" });

  return (
    <div className="w-[300px] flex flex-col gap-6 p-8 h-full rounded-l-[inherit] bg-[#242f40] text-gray-300">
      <div className="flex items-center gap-2">
        <BiSearch />
        <div className="relative">
          <input
            className="bg-transparent !outline-none h-5"
            placeholder="search city..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <img
        className="w-full h-[185px] object-center"
        src={`https://ngoc.fly.dev/${weather.current.weather[0].icon}.svg`}
      />
      <div className="flex gap-2">
        <span className="text-6xl">
          {useTemperature(weather.current.temp, temperatureType)}
        </span>
        <span className="font-medium text-2xl">°{temperatureType}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="">{day},</span>
        <span className="text-gray-400">
          {hours}:{String(minutes).padStart(2, "0")} {ampm}
        </span>
      </div>
      <div className="pt-4 border-t border-gray-500">
        <div>{weather.current.weather[0].main}</div>
        <div>{weather.current.weather[0].description}</div>
      </div>

      <div className="flex-1 relative">
        <div
          className="h-full rounded-xl flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${weather.image})`,
            filter: "blur(0px)",
            WebkitFilter: "blur(0px)",
          }}
        ></div>
        {/* <div className="absolute w-full top-1/2 -translate-y-1/2 text-center text-lg font-medium">
          Hanoi, VietNam
        </div> */}
      </div>
    </div>
  );
}
