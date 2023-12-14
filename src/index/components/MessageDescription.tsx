import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  messageCreatorActions,
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
