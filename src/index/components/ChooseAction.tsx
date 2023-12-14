import React, { useState } from "react";
import { FC } from "react";
import { actionToRepresentation } from "../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  MessageAction,
  messageCreatorActions,
  selectMessageAction,
  selectMessageCreactor,
} from "../../store/features/message-creator.slice";

const ChooseAction: FC = () => {
  const dispatch = useAppDispatch();
  const selectAction = useAppSelector(selectMessageAction);
  const [description, setDescription] = useState(
    actionToRepresentation[selectAction].description
  );

  return (
    <>
      <label>בחר את הפעולה:</label>
      <select
        onChange={(event) => {
          const newAction = event.target.value as MessageAction;
          dispatch(messageCreatorActions.setAction(newAction));
          setDescription(actionToRepresentation[newAction].description);
        }}
      >
        {Object.keys(actionToRepresentation).map((action) => (
          <option value={action} key={action}>
            {`${actionToRepresentation[action].hebrew} ${actionToRepresentation[action].icon}`}
          </option>
        ))}
      </select>
    </>
  );
};

export default ChooseAction;
