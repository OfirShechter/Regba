import React from "react";
import { FC } from "react";
import { actionToRepresentation } from "../../config/actionToRepresentation.config";
const ChooseAction: FC = () => {
  return (
    <select>
      {Object.keys(actionToRepresentation).map((action) => (
        <option value={action} key={action}>
          {`${actionToRepresentation[action].hebrew} ${actionToRepresentation[action].icon}`}
        </option>
      ))}
    </select>
  );
};

export default ChooseAction;
