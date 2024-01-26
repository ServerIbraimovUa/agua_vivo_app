import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:5173/agua_vivo_app';

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterVolume, thunkAPI) => {
    try {
      const response = await axios.post('/add', waterVolume);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateWaterVolume = createAsyncThunk(
  'water/updateWaterVolume',
  async ({ name, number, id }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
