import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addWaterThunk,
  deleteWaterThunk,
  getAmountDailyThunk,
  getAmountMonthlyThunk,
  updateWaterVolumeThunk,
} from "./water.operations";
import { IWater } from "../redux_ts/interfaces";
import { logOutThunk } from "../auth/auth.operations";

const waterInitState: IWater = {
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
      .addCase(logOutThunk.fulfilled, (state) => {
        state.amountDaily = waterInitState.amountDaily;
        state.amountMonthly = waterInitState.amountMonthly;
      })
      .addCase(addWaterThunk.fulfilled, (state, action) => {
        state.amountDaily.entries.push(action.payload);
        state.isLoading = false;
      })
      .addCase(updateWaterVolumeThunk.fulfilled, (state, action) => {
        const idx = state.amountDaily.entries.findIndex(
          (water) => water._id === action.payload._id
        );

        if (idx !== -1) {
          state.amountDaily.entries[idx] = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(deleteWaterThunk.fulfilled, (state, action) => {
        state.amountDaily.entries = state.amountDaily.entries.filter(
          (day) => day._id !== action.payload._id
        );

        state.isLoading = false;
      })
      .addCase(getAmountDailyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amountDaily = action.payload;
      })
      .addCase(getAmountMonthlyThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amountMonthly = action.payload;
      })
      .addCase(getAmountDailyThunk.rejected, (state) => {
        state.isLoading = false;
        state.amountDaily = waterInitState.amountDaily;
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
          state.amountMonthly = { month: [] };
          state.error = action.payload;
        }
      );
  },
});

export const waterReducer = waterSlice.reducer;
