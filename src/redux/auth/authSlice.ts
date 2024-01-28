import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  registerThunk,
  logInThunk,
  getCurrentUserThunk,
  updateAvatar,
  updateDailyNorma,
  getUserInfoByIdThunk,
  updateUserInfoByIdThunk,
  updatePassword,
  getDailyWaterNorma,
  logOutThunk,
} from "./auth.operations";
import { IAuthInit } from "../redux_ts/interfaces";

const authInitialState = {
  user: { email: "", avatar: "", gender: "", dailyNorma: "", name: "" },
  token: "",
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
      .addCase(getDailyWaterNorma.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserInfoByIdThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateUserInfoByIdThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updateDailyNorma.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isAuthorized = true;
        state.isLoading = false;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = {
          email: "",
          avatar: "",
          gender: "",
          dailyNorma: "",
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
          getDailyWaterNorma.rejected,
          getUserInfoByIdThunk.rejected,
          updateUserInfoByIdThunk.rejected,
          updateAvatar.rejected,
          updateDailyNorma.rejected,
          updatePassword.rejected,
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
          updateAvatar.pending,
          updateDailyNorma.pending,
          updatePassword.pending,
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
