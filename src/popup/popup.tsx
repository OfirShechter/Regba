import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./popup.css";
import { actionToRepresentation } from "./config/actionToRepresentation.config";
import ChooseAction from "./components/ChooseAction";
import { Provider } from "react-redux";
import { store, useAppSelector } from "../store/store";
import MessageDescription from "./components/MessageDescription";
import CreatorButton from "./components/CreatorButton/CreatorButton";
import { selectMessageCreactor } from "../store/features/message-creator/message-creator.selector";
import StatusIndicator from "./components/StatusIndicator";
const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <h1>הודעות חמ״ל</h1>
      <ChooseAction />
      <MessageDescription />
      <CreatorButton/>
      <StatusIndicator/>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
