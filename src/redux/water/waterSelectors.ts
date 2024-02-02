import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectWater = (state: RootState) => state.water;

// export const selectAllWater = createSelector(selectWater, (water) => {
//   return water.waterList;
// });

export const selectAmountDaily = createSelector(
  selectWater,
  (water) => water.amountDaily
);

export const selectPercentage = createSelector(
  selectWater,
  (water) => water.amountDaily.percentage
);

export const selectAmountMonthly = createSelector(
  selectWater,
  (water) => water.amountMonthly
);

export const selectIsLoading = createSelector(
  selectWater,
  (water) => water.isLoading
);

export const selectError = createSelector(selectWater, (water) => water.error);
