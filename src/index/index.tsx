import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import { actionToRepresentation } from "./config/actionToRepresentation.config";
import ChooseAction from "./components/ChooseAction/ChooseAction";
const App: React.FC<{}> = () => {
  return (
    <>
      <h1>הודעות חמ״ל</h1>
      <label>בחר את הפעולה:</label>
      <ChooseAction />

      <button>צור והעתק</button>
      <p>לחץ על 'צור והעתק' ליצירת ההודעה המלאה והעתקתה</p>
    </>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
