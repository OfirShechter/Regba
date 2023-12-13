import React from "react";
import { FC } from "react";
import { actionToRepresentation } from "../../config/actionToRepresentation.config";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import {
  MessageAction,
  messageCreatorActions,
  selectMessageAction,
  selectMessageCreactor,
} from "../../../store/features/message-creator.slice";

const ChooseAction: FC = () => {
  const dispatch = useAppDispatch();
  const selectAction = useAppSelector(selectMessageAction)

  return (
    <>
      <select
        onChange={(event) =>
          dispatch(
            messageCreatorActions.setAction(event.target.value as MessageAction)
          )
        }
      >
        {Object.keys(actionToRepresentation).map((action) => (
          <option value={action} key={action}>
            {`${actionToRepresentation[action].hebrew} ${actionToRepresentation[action].icon}`}
          </option>
        ))}
      </select>
      <textarea
        value={actionToRepresentation[selectAction].description}
      ></textarea>
    </>
  );
};

export default ChooseAction;
