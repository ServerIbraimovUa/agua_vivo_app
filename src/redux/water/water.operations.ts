import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAddWaterPortion,
  IAmountDaily,
  IAmountMonthly,
  IWaterPayload,
} from "../redux_ts/interfaces";

export const addWaterThunk = createAsyncThunk<IWaterPayload, IAddWaterPortion>(
  "water/addWater",
  async (waterData, thunkAPI) => {
    try {
      const response = await axios.post("/api/water/add", waterData);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterVolumeThunk = createAsyncThunk<
  IWaterPayload,
  IWaterPayload
>("water/updateWaterVolume", async (waterData, thunkAPI) => {
  try {
    const response = await axios.put(`/api/water/update`, waterData);
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteWaterThunk = createAsyncThunk<string, string>(
  "water/deleteWater",
  async (waterID, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/water/delete/:${waterID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAmountDailyThunk = createAsyncThunk<IAmountDaily>(
  "water/getAmountDaily",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/water/today");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getAmountMonthlyThunk = createAsyncThunk<IAmountMonthly, string>(
  "water/getAmountMonthly",
  async (date, thunkAPI) => {
    try {
      const response = await axios.get(`/api/water/month/:${date}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
