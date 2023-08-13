
export default function WeekCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col items-center">
      <h4>Sun</h4>
      <img src="https://ngoc.fly.dev/11d.svg" className="w-[80%]" />
      <div className="flex justify-center gap-2">
        <span className="font-semibold">15°</span>
        <span className="font-semibold text-gray-400">-3°</span>
      </div>
    </div>
  );
}
