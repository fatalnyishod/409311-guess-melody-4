import React from "react";
import GenreQuestionScreen from './genre-question-screen.jsx';
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";


configure({
  adapter: new Adapter()
});

const mocks = {
  question: {
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
  },
};


describe(`genre-question-screen testing`, () => {
  const {question} = mocks;

  it(`click on answer and submit form`, () => {
    const onAnswer = jest.fn();
    const genreQuestion = shallow(
        <GenreQuestionScreen
          onAnswer={onAnswer}
          question={question}
        />
    );


    const form = genreQuestion.find(`form`);
    const submitForm = jest.fn();
    form.simulate(`submit`, {
      preventDefault: submitForm,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(submitForm).toHaveBeenCalledTimes(1);
  });
});
