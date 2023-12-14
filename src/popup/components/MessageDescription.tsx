import React, { useState } from "react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { messageCreatorActions } from "../../store/features/message-creator/message-creator.slice";
import { selectMessageDescription } from "../../store/features/message-creator/message-creator.selector";

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
