import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";


const settings = {
  errorCount: 3,
};

ReactDom.render(
    <App
      errorCount={settings.errorCount}
      questions={questions}
    />,
    document.getElementById(`root`)
);
