import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWater,
  deleteWater,
  getAmountDaily,
  getAmountMonthly,
  updateWaterVolume,
} from "./water.operations";
import { IWater } from "../redux_ts/interfaces";

const waterInitState: IWater = {
  waterList: [],
  amountDaily: null,
  amountMonthly: null,
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
      .addCase(getAmountDaily.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amountDaily = action.payload;
      })
      .addCase(getAmountMonthly.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amountMonthly = action.payload;
      })
      .addCase(updateWaterVolume.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = state.waterList.map((water) => {
          if (water.id === action.payload.id) return action.payload;
          return water;
        });
      })
      .addCase(deleteWater.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = state.waterList.filter(
          (water) => !action.payload.includes(water.id)
        );
      })
      .addMatcher(
        isAnyOf(
          addWater.pending,
          getAmountDaily.pending,
          getAmountMonthly.pending,
          updateWaterVolume.pending,
          deleteWater.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addWater.rejected,
          getAmountDaily.rejected,
          getAmountMonthly.rejected,
          updateWaterVolume.rejected,
          deleteWater.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const waterReducer = waterSlice.reducer;
