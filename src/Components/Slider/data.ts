export type TimeRange = {
  start: string;
  end: string;
};

export const timeRange: TimeRange = {
  start: "06:00",
  end: "22:00",
};

export const parseTimeToMinutes = (time: string): number => {
  const [hoursPart = "0", minutesPart = "0"] = time.split(":");
  const hours = Number(hoursPart);
  const minutes = Number(minutesPart);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return 0;
  }

  return hours * 60 + minutes;
};

export const minutesToHourFloatString = (minutes: number): string => {
  return (minutes / 60).toFixed(2);
};

export const timeRangeMinutes = {
  start: parseTimeToMinutes(timeRange.start),
  end: parseTimeToMinutes(timeRange.end),
};

export const initialSliderMinutes = Math.round(
  (timeRangeMinutes.start + timeRangeMinutes.end) / 2
);
