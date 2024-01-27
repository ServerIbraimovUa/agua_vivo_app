import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:5173/agua_vivo_app";

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = token;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/register", userData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post("/login", userData);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  "auth/current",
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const token = state.auth.token;
    try {
      setToken(token);
      const response = await axios.get("/current");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state: any = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) {
        return false;
      }
      return true;
    },
  }
);

export const getDailyWaterNorma = createAsyncThunk(
  "auth/getDailyWaterNorma",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/amountdaily");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getUserInfoByIdThunk = createAsyncThunk(
  "auth/getInfo",
  async (userID, thunkAPI) => {
    try {
      const response = await axios.get(`/:${userID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserInfoByIdThunk = createAsyncThunk(
  "auth/updateInfo",
  async ({ name, email, gender, avatar, id }: any, thunkAPI) => {
    try {
      const response = await axios.patch(`/:${id}`, {
        name,
        email,
        gender,
        avatar,
      });
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/avatars",
  async (newAvatar, thunkAPI) => {
    try {
      const response = await axios.patch("/avatars", newAvatar);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/updatepassword",
  async (newPassword, thunkAPI) => {
    try {
      const response = await axios.patch("/updatepassword", newPassword);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      axios.post("/logout");
      unsetToken();
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
