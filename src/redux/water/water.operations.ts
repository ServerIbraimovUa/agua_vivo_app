import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleToken } from "../services/handleToken";
import {
  IAddWaterPortion,
  IAmountDaily,
  IAmountMonthly,
  IAuthInitInfo,
  IWaterPayload,
} from "../redux_ts/interfaces";

export const addWaterThunk = createAsyncThunk<
  IWaterPayload,
  IAddWaterPortion,
  { state: { auth: IAuthInitInfo } }
>("water/addWater", async (waterData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.post("/api/water/add", waterData);
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const updateWaterVolumeThunk = createAsyncThunk<
  IWaterPayload,
  IWaterPayload,
  { state: { auth: IAuthInitInfo } }
>("water/updateWaterVolume", async (waterData, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.put(`/api/water/update`, waterData);
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteWaterThunk = createAsyncThunk<
  string,
  string,
  { state: { auth: IAuthInitInfo } }
>("water/deleteWater", async (waterID, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.delete(`/api/water/delete/:${waterID}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const getAmountDailyThunk = createAsyncThunk<
  IAmountDaily,
  unknown,
  { state: { auth: IAuthInitInfo } }
>("water/getAmountDaily", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.get("/api/water/today/");
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const getAmountMonthlyThunk = createAsyncThunk<
  IAmountMonthly,
  string,
  { state: { auth: IAuthInitInfo } }
>("water/getAmountMonthly", async (date, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.get(`/api/water/month/:${date}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});
