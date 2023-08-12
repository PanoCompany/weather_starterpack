import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function TodayInfo() {
  const [showCitiesSuggest, setShowCitiesSuggest] = useState(false);

  return (
    <div className="w-[300px] flex flex-col gap-6 p-8 h-full rounded-l-[inherit] bg-[#242f40] text-gray-300">
      <div className="flex items-center gap-2">
        <BiSearch />
        <div className="relative">
          <input
            className="bg-transparent !outline-none h-5"
            placeholder="search city..."
            onFocus={() => {
              setShowCitiesSuggest(true);
            }}
            onBlur={() => {
              setShowCitiesSuggest(false);
            }}
          />
          {showCitiesSuggest && (
            <div className="absolute top-[130%] w-full bg-white rounded-md">
              <div className="px-2 text-gray-700 hover:bg-gray-300 py-1 rounded-[inherit] cursor-pointer">
                Ha Noi
              </div>
              <div className="px-2 text-gray-700 hover:bg-gray-300 py-1 rounded-[inherit] cursor-pointer">
                Da Nang
              </div>
              <div className="px-2 text-gray-700 hover:bg-gray-300 py-1 rounded-[inherit] cursor-pointer">
                Ho Chi Minh City
              </div>
            </div>
          )}
        </div>
      </div>
      <img className="w-full h-[185px] object-center" src="https://ngoc.fly.dev/10n.svg" />
      <div className="flex gap-2">
        <span className="text-6xl">12</span>
        <span className="font-medium text-2xl">°C</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="">Monday,</span>
        <span className="text-gray-400">16:00</span>
      </div>
      <div className="pt-4 border-t border-gray-500">
        <div>Cloudy</div>
        <div>Rain - 30%</div>
      </div>

      <div className="flex-1 relative">
        <div
          className="h-full rounded-xl flex items-center justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1601108644994-1e450e786d3d?ixid=M3w0ODgwMTh8MHwxfHNlYXJjaHwxfHxIYSUyME5vaXxlbnwwfDB8fHwxNjkxODY2MTkzfDA&ixlib=rb-4.0.3)",
            filter: "blur(1px)",
            "-webkit-filter": "blur(1px)",
          }}
        ></div>
        <div className="absolute w-full top-1/2 -translate-y-1/2 text-center text-lg font-medium">
          Hanoi, VietNam
        </div>
      </div>
    </div>
  );
}
