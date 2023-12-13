import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { actionToRepresentation } from "./config/actionToRepresentation.config";
import ChooseAction from "./components/ChooseAction/ChooseAction";
const App: React.FC<{}> = () => {
  return (
    <>
      <h1>הודעות חמ״ל</h1>
      <label>בחר את הפעולה:</label>
      <ChooseAction/>
      <textarea id="givenMessage">
        {Object.values(actionToRepresentation)[0].description}
      </textarea>
      <button>צור והעתק</button>
      <p>לחץ על 'צור והעתק' ליצירת ההודעה המלאה והעתקתה</p>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
