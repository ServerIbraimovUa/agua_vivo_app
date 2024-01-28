import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Data } from "../../components/AuthForm/AuthForm";
import { IAuthInit } from "../redux_ts/interfaces";

axios.defaults.baseURL = "https://agua-vivo-app-backend.onrender.com";

const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

interface CurrentData {
  email: string;
  avatar: string;
}

interface UpdateUser {
  email?: string;
  avatar?: string;
  gender?: "women" | "man" | "";
  dailyNorma?: string;
  name?: string;
  id: string;
}

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
  string,
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

export const getDailyWaterNorma = createAsyncThunk(
  "auth/getDailyWaterNorma",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/amountdaily");
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
      const response = await axios.get(`/users/:${userID}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserInfoByIdThunk = createAsyncThunk(
  "auth/updateInfo",
  async ({ name, email, gender, avatar, id }: UpdateUser, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/:${id}`, {
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
      const response = await axios.patch("/users/avatars", newAvatar);
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
      const response = await axios.patch("/users/updatepassword", newPassword);
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
