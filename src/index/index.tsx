import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { actionToRepresentation } from "./config/actionToRepresentation.config";
import ChooseAction from "./components/ChooseAction";
import { Provider } from "react-redux";
import { store } from "../store/store";
import MessageDescription from "./components/MessageDescription";
const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <h1>הודעות חמ״ל</h1>
      <ChooseAction />
      <MessageDescription />
      <button>צור והעתק</button>
      <p>לחץ על 'צור והעתק' ליצירת ההודעה המלאה והעתקתה</p>
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
