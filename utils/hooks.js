export const useTemperature = (K, to) => {
  let output = K;
  switch (to) {
    case "F":
      output = 1.8 * (K - 273) + 32;
      break;
    case "C":
      output = K - 273.15;
      break;
    default:
      break;
  }
  return Math.round(output);
};

export const useWeekDay = (index) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return weekday[index];
};

export const formatTime = (time, timeZone) => {
  return new Date(
    new Date(time * 1000).toLocaleString("en-US", {
      timeZone: timeZone,
    })
  );
};
