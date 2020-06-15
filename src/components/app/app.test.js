import React from "react";
import App from "./app.jsx";
import renderer from 'react-test-renderer';


const errorCount = 42;

it(`correct render`, () => {
  const tree = renderer
    .create(<App
      errorCount={errorCount}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
