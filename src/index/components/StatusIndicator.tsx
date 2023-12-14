import React from "react";
import { FC } from "react";
import { useAppSelector } from "../../store/store";
import { selectMessageStatus } from "../../store/features/message-creator/message-creator.selector";
import { MessageStatus } from "../../store/features/message-creator/message-creator.slice";
import { creatorButtonName } from "./CreatorButton/CreatorButton";

const statusToMessageMapper: { [k in MessageStatus]: string } = {
  [MessageStatus.CREATED]: "ההודעה הועתקה",
  [MessageStatus.DID_NOT_CREATED]: `לחץ על ${creatorButtonName} ליצירת ההודעה והעתקתה`,
  [MessageStatus.DEFAULT_CREATED]: `ההודעה הדיפולטית הועתקה, לחץ על '${creatorButtonName}' ליצירת הודעה אחרת והעתקתה`,
};

const StatusIndicator: FC = () => {
  const status = useAppSelector(selectMessageStatus);
  return <p>{statusToMessageMapper[status]}</p>;
};

export default StatusIndicator;
