import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectWater = (state: RootState) => state.water;

export const selectAllWater = createSelector(
    selectWater,
    water => water.waterList
  );

  export const selectDailyNorma = createSelector(
    selectWater,
    water => water
  );

  export const selectMonthlyNorma = createSelector(
    selectWater,
    water => water.monthlyNorma
  );

  export const selectIsLoading = createSelector(
    selectWater,
    water => water.isLoading
  );

  export const selectError = createSelector(
    selectWater,
    water => water.error
  );