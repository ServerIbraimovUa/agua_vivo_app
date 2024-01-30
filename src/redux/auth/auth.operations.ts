import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { CurrentData, IAuthInit, UpdateUser } from "../redux_ts/interfaces";

axios.defaults.baseURL = "https://agua-vivo-app-backend.onrender.com";
export interface Data {
  email: string;
  password: string;
}
const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data: Data, thunkAPI) => {
    try {
      const response = await axios.post("/users/register", data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (data: Data, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk<
  CurrentData,
  undefined,
  { state: { auth: IAuthInit } }
>("auth/current", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    setToken(persistedToken);
    const response = await axios.get("/users/current");
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const getUserInfoByIdThunk = createAsyncThunk(
  "auth/getInfo",
  async (userID, thunkAPI) => {
    try {
      const response = await axios.get(`/users/info/:${userID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserInfoByIdThunk = createAsyncThunk(
  "auth/updateInfo",
  async (newUserData: UpdateUser, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/users/update-user/:${newUserData.id}`,
        newUserData
      );
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "auth/avatars",
  async (newAvatar: File, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", newAvatar);
      const response = await axios.patch("/users/avatars", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.avatar;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateDailyNorma = createAsyncThunk(
  "auth/updateDailyNorma",
  async (newDailyNorma:string, thunkAPI) => {
    try {
      const response = await axios.patch("/users/water-rate", newDailyNorma);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async (newPassword, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update-password", newPassword);
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
      axios.post("/users/logout");
      unsetToken();
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);
