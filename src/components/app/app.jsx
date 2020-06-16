import React from "react";
import PropTypes from 'prop-types';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  const {errorCount, startButtonPressed} = props;
  return <WelcomeScreen
    errorCount={errorCount}
    startButtonPressed={startButtonPressed}
  />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  startButtonPressed: PropTypes.func.isRequired
};

export default App;
