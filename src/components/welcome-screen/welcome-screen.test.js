import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";
import renderer from 'react-test-renderer';


const errorCount = 42;

it(`correct render`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={errorCount}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
