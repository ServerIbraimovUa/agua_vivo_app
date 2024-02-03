import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWaterThunk,
  deleteWaterThunk,
  getAmountDailyThunk,
  getAmountMonthlyThunk,
  updateWaterVolumeThunk,
} from "./water.operations";
import { IWater } from "../redux_ts/interfaces";

const waterInitState: IWater = {
  waterList: [],
  amountDaily: {
    amountOfWater: 0,
    percentage: 0,
    entries: [],
  },
  amountMonthly: {
    month: [],
  },
  isLoading: false,
  error: null,
};

const waterSlice = createSlice({
  name: "water",
  initialState: waterInitState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.waterList.push(action.payload);
        state.isLoading = false;
      })
      .addCase(updateWaterVolumeThunk.fulfilled, (state, action) => {
        const idx = state.waterList.findIndex(
          (water) => water.id === action.payload.id
        );

        if (idx !== -1) {
          state.waterList[idx] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.waterList = state.waterList.filter(
          (water) => !action.payload.includes(water.id)
        );
        state.isLoading = false;
      })
      .addCase(getAmountDailyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.waterList = action.payload.entries;
        state.amountDaily = action.payload;
      })
      .addCase(getAmountMonthlyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amountMonthly = action.payload;
      })
      .addMatcher(
        isAnyOf(
          addWaterThunk.pending,
          getAmountDailyThunk.pending,
          getAmountMonthlyThunk.pending,
          updateWaterVolumeThunk.pending,
          deleteWaterThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addWaterThunk.rejected,
          getAmountDailyThunk.rejected,
          getAmountMonthlyThunk.rejected,
          updateWaterVolumeThunk.rejected,
          deleteWaterThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.amountMonthly = {month: []}
          state.error = action.payload;
        }
      );
  },
});

export const waterReducer = waterSlice.reducer;
