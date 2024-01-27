import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5173/agua_vivo_app";

export const addWater = createAsyncThunk(
  "water/addWater",
  async (waterVolume, thunkAPI) => {
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
  async (waterData, thunkAPI) => {
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
  async (waterID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${waterID}`);
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
