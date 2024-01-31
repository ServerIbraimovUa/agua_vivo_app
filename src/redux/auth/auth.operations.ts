import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IAuthData,
  IAuthInitInfo,
  ICurrentUserData,
  IGetUserInfo,

  IUpdateUserDailyNorma,
  IDailyNorma,
  IUpdateUserinfo,

} from "../redux_ts/interfaces";
import { handleToken, setToken, unsetToken } from "../services/handleToken";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data: IAuthData, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logInThunk = createAsyncThunk(
  "auth/login",
  async (data: IAuthData, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", data);
      setToken(response.data.token);
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk<
  ICurrentUserData,
  undefined,
  { state: { auth: IAuthInitInfo } }
>("auth/current", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    handleToken(state.auth.token);
    const response = await axios.get("/auth/current");
    return response.data;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const getUserInfoThunk = createAsyncThunk<IGetUserInfo, undefined>(
  "auth/users/getInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users/info");
      return response.data;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  "auth/users/updateInfo",
  async (newUserData: IUpdateUserinfo, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update-user", newUserData);
      return response.data.user;
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserAvatarThunk = createAsyncThunk(
  "auth/users/avatars",
  async (newAvatar: File, thunkAPI) => {
    try {
      const formData = new FormData();
      if (newAvatar) {
        formData.append("avatar", newAvatar);
      }

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

export const updateUserDailyNormaThunk = createAsyncThunk(
  
"auth/users/updateDailyNorma", async (newDailyNorma:{dailyNorma:number}, thunkAPI) => {
  try {
    const response = await axios.patch("/users/water-rate", newDailyNorma);
    return response.data.dailyNorma;
  } catch (e) {
    if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      axios.post("/auth/logout");
      unsetToken();
    } catch (e) {
      if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updatePassword = createAsyncThunk(
//   "auth/updatePassword",
//   async (newPassword, thunkAPI) => {
//     try {
//       const response = await axios.patch("/users/update-password", newPassword);
//       setToken(response.data.token);
//       return response.data;
//     } catch (e) {
//       if (e instanceof Error) return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
