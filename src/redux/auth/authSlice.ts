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
    avatar: "",
    gender: "",
    dailyNorma: null,
  },
  token: null,
  isAuthorized: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
} as IAuthInitInfo;

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setVerify(state, action) {
      return (state = { ...state, token: action.payload });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(logInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthorized = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthorized = true;
        state.isRefreshing = false;
      })
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuthorized = true;
        state.isRefreshing = false;
        state.isLoading = true;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserAvatarThunk.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
      })
      .addCase(updateUserDailyNormaThunk.fulfilled, (state, action) => {
        state.user.dailyNorma = action.payload;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = authInitialState.user;
        state.token = null;
        state.isAuthorized = false;
      })
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.error = null;
        state.isRefreshing = true;
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
          state.error = action.payload;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          logInThunk.pending,
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
export const { setVerify } = authSlice.actions;
