import React from "react";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `path`,
    genre: `rock`,
  }, {
    src: `path`,
    genre: `blues`,
  }, {
    src: `path`,
    genre: `jazz`,
  }, {
    src: `path`,
    genre: `rock`,
  }],
};

describe(`genre-question-screen component snap`, () => {
  const onAnswer = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create(
        <GenreQuestionScreen
          onAnswer={onAnswer}
          question={question}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
