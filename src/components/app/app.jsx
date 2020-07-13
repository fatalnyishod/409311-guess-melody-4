import React from "react";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen.jsx";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen.jsx";

const App = (props) => {
  const {errorCount, startButtonPressed, onAnswer, question} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errorCount={errorCount}
            startButtonPressed={startButtonPressed}
          />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen
            onAnswer={onAnswer}
            question={question}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    // type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
  errorCount: PropTypes.number.isRequired,
  startButtonPressed: PropTypes.func.isRequired
};

export default App;
