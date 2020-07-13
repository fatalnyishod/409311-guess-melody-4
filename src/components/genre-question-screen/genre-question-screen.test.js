import React from "react";
import GenreQuestionScreen from "./genre-question-screen.jsx";
import renderer from "react-test-renderer";

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

describe(`genre-question-screen component snap`, () => {
  const onAnswer = jest.fn();

  it(`correct render`, () => {
    const tree = renderer.create((
      <GenreQuestionScreen
        onAnswer={onAnswer}
        question={question}
      />
    ), {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
