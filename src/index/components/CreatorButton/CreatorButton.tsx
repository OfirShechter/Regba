import React, { useState } from "react";
import { FC } from "react";
import { actionToRepresentation } from "../../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { generateMessage } from "./create-message-logic";
import {
  selectMessageAction,
  selectMessageDescription,
} from "../../../store/features/message-creator/message-creator.selector";
import {
  MessageStatus,
  messageCreatorActions,
} from "../../../store/features/message-creator/message-creator.slice";

export const creatorButtonName = 'צור והעתק'
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
      {creatorButtonName}
    </button>
  );
};

export default CreatorButton;
