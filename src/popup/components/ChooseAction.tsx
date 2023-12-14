import React, { useState } from "react";
import { FC } from "react";
import {
  MessageAction,
  actionToRepresentation,
} from "../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { messageCreatorActions } from "../../store/features/message-creator/message-creator.slice";
import { selectMessageAction, selectMessageCreactor } from "../../store/features/message-creator/message-creator.selector";

const ChooseAction: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <label>בחר את הפעולה:</label>
      <select
        onChange={(event) => {
          const newAction = event.target.value as MessageAction;
          dispatch(messageCreatorActions.setAction(newAction));
        }}
      >
        {Object.keys(actionToRepresentation).map((action) => (
          <option value={action} key={action}>
            {`${actionToRepresentation[action].action} ${actionToRepresentation[action].icon}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default ChooseAction;
