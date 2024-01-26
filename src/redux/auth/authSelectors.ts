import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectAuthorization = (state: RootState) => state.auth;

export const selectUser = createSelector(
  selectAuthorization,
  auth => auth.user
);

export const selectToken = createSelector(
  selectAuthorization,
  auth => auth.token
);

export const selectIsAuthorized = createSelector(
  selectAuthorization,
  auth => auth.isAuthorized
);

export const selectIsLoading = createSelector(
  selectAuthorization,
  auth => auth.isLoading
);

export const selectError = createSelector(
  selectAuthorization,
  auth => auth.error
);
