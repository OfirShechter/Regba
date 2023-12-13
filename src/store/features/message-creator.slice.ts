import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { actionToRepresentation } from "../../index/config/actionToRepresentation.config";

export enum MessageStatus {
  CREATED,
  DEFAULT_CREATED,
  DID_NOT_CREATED,
}

export type MessageAction = keyof typeof actionToRepresentation;
export type MessageCreatorState = {
  status: MessageStatus;
  action: MessageAction;
};

const initialState: MessageCreatorState = {
  status: MessageStatus.DID_NOT_CREATED,
  action: Object.keys(actionToRepresentation)[0] as MessageAction,
};
const messageCreatorSlice = createSlice({
  name: "message-creator",
  initialState,
  reducers: {
    updateStatus(state, action: PayloadAction<MessageStatus>) {
      state.status = action.payload;
    },
    setAction(state, action: PayloadAction<MessageAction>) {
      state.action = action.payload;
    },
  },
});

export const messageCreatorActions = messageCreatorSlice.actions;

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

export default messageCreatorSlice.reducer;
