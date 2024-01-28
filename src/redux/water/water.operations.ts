import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { INewPortion, IWaterData } from "../../components/WaterList/WaterList";

export const addWater = createAsyncThunk(
  "water/addWater",
  async (waterVolume: INewPortion, thunkAPI) => {
    try {
      const response = await axios.post("/api/water/add", waterVolume);
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
      const response = await axios.post(`/api/water/update`, waterData);
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
 const response = await axios.delete(`/api/water/contacts/${waterID}`);
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
      const response = await axios.get("/api/water/amoutmonth");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
