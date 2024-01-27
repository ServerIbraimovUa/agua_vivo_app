import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewPortion, IWaterData } from "../../components/WaterList/WaterList";

axios.defaults.baseURL = "http://localhost:5173/agua_vivo_app";

export const addWater = createAsyncThunk(
  "water/addWater",
  async (waterVolume: INewPortion, thunkAPI) => {
    try {
      const response = await axios.post("/add", waterVolume);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterVolume = createAsyncThunk(
  "water/updateWaterVolume",
  async (waterData: IWaterData, thunkAPI) => {
    try {
      const response = await axios.post(`/update`, waterData);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  "water/deleteWater",
  async (waterID: number, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${waterID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getDailyWaterNorma = createAsyncThunk(
  "water/getDailyWaterNorma",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/amountdaily");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMonthlyWaterNorma = createAsyncThunk(
  "water/getMonthlyWaterNorma",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/amoutmonth");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
