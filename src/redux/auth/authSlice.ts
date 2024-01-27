import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerThunk,
  logInThunk,
  getCurrentUserThunk,
  updateAvatar,
  logOutThunk,
  getUserInfoByIdThunk,
  updateUserInfoByIdThunk,
  updatePassword,
  getDailyWaterNorma,
} from "./auth.operations";
import { IAuthInit } from "../redux_ts/interfaces";

const authInitialState = {
  user: null,
  token: null,
  isAuthorized: false,
  isLoading: false,
  error: null,
} as IAuthInit;

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
      .addCase(getUserInfoByIdThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(getDailyWaterNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateUserInfoByIdThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isAuthorized = false;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          logInThunk.rejected,
          getCurrentUserThunk.rejected,
          getDailyWaterNorma.rejected,
          getUserInfoByIdThunk.rejected,
          updateUserInfoByIdThunk.rejected,
          updatePassword.rejected,
          updateAvatar.rejected,
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
          getDailyWaterNorma.pending,
          getUserInfoByIdThunk.pending,
          updateUserInfoByIdThunk.pending,
          updatePassword.pending,
          updateAvatar.pending,
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
