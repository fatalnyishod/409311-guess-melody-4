import React from "react";
import App from "./app.jsx";
import renderer from 'react-test-renderer';


describe(`app component snap`, () => {
  const errorCount = 42;
  const startButtonPressed = jest.fn();

  it(`correct render`, () => {
    const tree = renderer
      .create(<App
        startButtonPressed={startButtonPressed}
        errorCount={errorCount}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
