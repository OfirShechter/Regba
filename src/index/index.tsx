import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App: React.FC<{}> = () => {
  return (
    <>
      <head>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <h1>הודעות חמ״ל</h1>
        <label id="neededAction">בחר את הפעולה:</label>
        <select name="neededAction" id="neededAction"></select>
        <textarea id="givenMessage">
          הדבק כאן את ההודעה שברצונך להעביר לתושבים
        </textarea>
        <button id="generateMessageButton">צור והעתק</button>
        <p id="messageStatus">לחץ על 'צור והעתק' ליצירת ההודעה המלאה והעתקתה</p>
      </body>
    </>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
