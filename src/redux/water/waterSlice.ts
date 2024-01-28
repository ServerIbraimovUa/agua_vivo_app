import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWater,
  deleteWater,
  getMonthlyWaterNorma,
  updateWaterVolume,
} from "./water.operations";
import { IWater } from "../redux_ts/interfaces";

const waterInitState: IWater = {
  waterList: [],
  monthlyNorma: null,
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: "water",
  initialState: waterInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList.unshift(action.payload);
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = state.waterList.filter(
          (water) => !action.payload.includes(water.id)
        );
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = state.waterList.map((water) => {
          if (water.id === action.payload.id) return action.payload;
          return water;
        });
      })
      .addCase(getMonthlyWaterNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.monthlyNorma = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addWater.pending,
          updateWaterVolume.pending,
          deleteWater.pending,
          getMonthlyWaterNorma.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addWater.rejected,
          updateWaterVolume.rejected,
          deleteWater.rejected,
          getMonthlyWaterNorma.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const waterReducer = waterSlice.reducer;
