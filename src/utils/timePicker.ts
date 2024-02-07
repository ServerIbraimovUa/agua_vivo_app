import { format, addMinutes, startOfHour } from "date-fns";

export const generateTimeOptions = () => {
  const now = new Date();
  let currentTime = now;
  const timeOptions = [];

  const currentMinute = now.getMinutes();

  let nextMultipleOfFive = currentMinute + (5 - (currentMinute % 5));
  if (nextMultipleOfFive >= 60) {
    nextMultipleOfFive -= 60;
    currentTime = addMinutes(
      startOfHour(addMinutes(now, 60)),
      nextMultipleOfFive
    );
  } else {
    currentTime = addMinutes(now, nextMultipleOfFive - currentMinute);
  }
  timeOptions.push(format(now, "hh:mm aa"));

  for (let i = 0; i < 24 * 12; i++) {
    timeOptions.push(format(currentTime, "hh:mm aa"));
    currentTime = addMinutes(currentTime, 5);
  }

  return timeOptions;
};
