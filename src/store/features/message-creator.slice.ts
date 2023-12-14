import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { actionToRepresentation, MessageAction } from "../../index/config/actionToRepresentation.config";

export enum MessageStatus {
  CREATED,
  DEFAULT_CREATED,
  DID_NOT_CREATED,
}

export type MessageCreatorState = {
  status: MessageStatus;
  action: MessageAction;
  description: string;
};

const defaultAction = Object.keys(actionToRepresentation)[0] as MessageAction;
const initialState: MessageCreatorState = {
  status: MessageStatus.DID_NOT_CREATED,
  action: defaultAction,
  description: actionToRepresentation[defaultAction].description,
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
      state.description = actionToRepresentation[action.payload].description;
    },
    setDescription(state, action: PayloadAction<string>) {
        state.description = action.payload
    }
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

export const selectMessageDescription = createSelector(
  selectMessageCreactor,
  (state) => state.description
);

export default messageCreatorSlice.reducer;
