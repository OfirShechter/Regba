import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const selectMessageCreactor = (state: RootState) =>
  state.messageCreactor;

export const selectMessageStatus = createSelector(
  selectMessageCreactor,
  (state) => state.status
);

export const selectMessageAction = createSelector(
  selectMessageCreactor,
  (state) => state.action
);

export const selectMessageDescription = createSelector(
  selectMessageCreactor,
  (state) => state.description
);
