import React, { useEffect, useState } from "react";
import { FC } from "react";
import {
  MessageAction,
  actionToRepresentation,
} from "../../config/actionToRepresentation.config";
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

export const creatorButtonName = "צור והעתק";
const CreatorButton: FC = () => {
  const dispatch = useAppDispatch();
  const description = useAppSelector(selectMessageDescription);
  const action = useAppSelector(selectMessageAction);

  useEffect(() => {
    const createDefaultMessage = async () => createMessage(action, description, MessageStatus.DEFAULT_CREATED, dispatch);
    createDefaultMessage()
  }, [dispatch]);

  return (
    <button
      onClick={() =>
        createMessage(action, description, MessageStatus.CREATED, dispatch)
      }
    >
      {creatorButtonName}
    </button>
  );
};

const createMessage = async (
  action: MessageAction,
  description: string,
  status: MessageStatus,
  dispatchCallback
) => {
  await generateMessage(action, description);
  dispatchCallback(messageCreatorActions.updateStatus(status));
};

export default CreatorButton;
