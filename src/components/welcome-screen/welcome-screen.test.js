import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";
import renderer from 'react-test-renderer';


describe(`welcome screen component snap`, () => {
  const errorCount = 42;
  const startButtonPressed = jest.fn();

  it(`correct render`, () => {
    const tree = renderer
      .create(<WelcomeScreen
        errorCount={errorCount}
        startButtonPressed={startButtonPressed}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
