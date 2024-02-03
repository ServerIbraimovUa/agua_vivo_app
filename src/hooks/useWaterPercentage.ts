import { useSelector } from "react-redux";
import { selectDailyNorma } from "../redux/auth/authSelectors";
import { selectAmountDaily } from "../redux/water/waterSelectors";

export const useWaterPercentage = () => {
  const dailyNorma = useSelector(selectDailyNorma);
  const { entries } = useSelector(selectAmountDaily);
  const total = entries.reduce(
    (acc, { waterVolume }) => (acc += waterVolume),
    0
  );
  if (dailyNorma) {
    const percentage = Math.floor((total / (dailyNorma * 1000)) * 100);
    return percentage;
  }
  return 0;
};
