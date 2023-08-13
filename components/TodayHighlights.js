import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import TodayCard from "./TodayCard";

export default function TodayHighlights() {
  return (
    <div className="row-span-2 w-full flex flex-col">
      <h2 className="font-semibold pb-4">Today's Highlights</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 flex-1">
        <TodayCard title="UV Index">
          <div
            style={{ "--percentageRotate": 90 }}
            className="flex flex-col items-center mt-6 relative"
          >
            <div className="chart">
              <div></div>
            </div>
            <span className="absolute text-2xl bottom-0 font-semibold right-1/2 translate-x-1/2">
              5
            </span>
          </div>
        </TodayCard>

        <TodayCard title="Wild Status">
          <div className="py-4">
            <span className="font-semibold text-3xl">7.70</span>
            <span className="font-medium ml-2">km/h</span>
          </div>
          <div className="font-bold text-gray-700 text-xs">WSW</div>
        </TodayCard>

        <TodayCard title="Sunrise & Sunset">
          <div className="py-2 flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <BsFillSunriseFill color="#FFDD4A" size={34} />
              <span className="font-medium">6:35 AM</span>
            </div>
            <div className="flex items-center gap-4">
              <BsFillSunsetFill color="#FFDD4A" size={34} />
              <span className="font-medium">5:42 PM</span>
            </div>
          </div>
        </TodayCard>

        <TodayCard title="Humidity">
          <div className="py-4 flex">
            <span className="font-semibold text-3xl">12</span>
            <span className="font-medium ml-2">%</span>
          </div>
          <div className="font-bold text-gray-700 text-xs">AVG: 6</div>
        </TodayCard>

        <TodayCard title="Visibility">
          <div className="py-4">
            <span className="font-semibold text-3xl">5.2</span>
            <span className="font-medium ml-2">km</span>
          </div>
          <div className="font-bold text-gray-700 text-xs">AVG: 7</div>
        </TodayCard>

        <TodayCard title="Air Quality">
          <div className="py-4">
            <span className="font-semibold text-3xl">105</span>
          </div>
          <div className="font-bold text-gray-700 text-xs">AVG: 100</div>
        </TodayCard>
      </div>
    </div>
  );
}
