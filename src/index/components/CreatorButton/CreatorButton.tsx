import React, { useState } from "react";
import { FC } from "react";
import { actionToRepresentation } from "../../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  MessageStatus,
  messageCreatorActions,
  selectMessageAction,
  selectMessageDescription,
} from "../../../store/features/message-creator.slice";
import { generateMessage } from "./create-message-logic";

const CreatorButton: FC = () => {
  const dispatch = useAppDispatch();
  const description = useAppSelector(selectMessageDescription);
  const action = useAppSelector(selectMessageAction);

  return (
    <button
      onClick={async () => {
        await generateMessage(action, description);
        dispatch(messageCreatorActions.updateStatus(MessageStatus.CREATED));
      }}
    >
      צור והעתק
    </button>
  );
};

export default CreatorButton;
