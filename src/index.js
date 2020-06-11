import React from "react";
import ReactDom from "react-dom";
import App from "./components/app.jsx";

const init = () => {
  const settings = {
    errorCount: 3,
  };

  ReactDom.render(
      <App errorCount={settings.errorCount} />,
      document.getElementById(`root`)
  );
};

init();
