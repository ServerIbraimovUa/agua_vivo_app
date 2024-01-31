import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerThunk,
  logInThunk,
  getCurrentUserThunk,
  logOutThunk,
  getUserInfoThunk,
  updateUserInfoThunk,
  updateUserAvatarThunk,
  updateUserDailyNormaThunk,
} from "./auth.operations";
import { IAuthInitInfo } from "../redux_ts/interfaces";

const authInitialState = {
  user: {
    name: "",
    email: "",
    avatar: null,
    gender: "",
    dailyNorma: null,
  },
  token: "",
  isAuthorized: false,
  isLoading: false,
  error: null,
} as IAuthInitInfo;

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateUserAvatarThunk.fulfilled, (state, action) => {
        state.user.avatar = action.payload.avatar;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateUserDailyNormaThunk.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = {
          email: "",
          avatar: null,
          gender: "",
          dailyNorma: 0,
          name: "",
        };
        state.token = "";
        state.isAuthorized = false;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          getCurrentUserThunk.rejected,
          getUserInfoThunk.rejected,
          updateUserInfoThunk.rejected,
          updateUserAvatarThunk.rejected,
          updateUserDailyNormaThunk.rejected,
          logOutThunk.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          console.log(action.payload);
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          logInThunk.pending,
          getCurrentUserThunk.pending,
          getUserInfoThunk.pending,
          updateUserInfoThunk.pending,
          updateUserAvatarThunk.pending,
          updateUserDailyNormaThunk.pending,
          logOutThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
