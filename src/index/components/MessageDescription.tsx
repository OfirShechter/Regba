import React, { useState } from "react";
import { FC } from "react";
import { actionToRepresentation } from "../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  MessageAction,
  messageCreatorActions,
  selectMessageAction,
  selectMessageCreactor,
  selectMessageDescription,
} from "../../store/features/message-creator.slice";

const MessageDescription: FC = () => {
  const dispatch = useAppDispatch();
  const description = useAppSelector(selectMessageDescription);

  return (
    <textarea
      value={description}
      onChange={(event) =>
        dispatch(messageCreatorActions.setDescription(event.target.value))
      }
    />
  );
};

export default MessageDescription;
