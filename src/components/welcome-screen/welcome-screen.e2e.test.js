import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`welcome screen component`, () => {
  it(`button pressed`, () => {
    const startButtonPressed = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errorCount={3}
          startButtonPressed={startButtonPressed}
        />
    );

    const startButton = welcomeScreen.find(`button.welcome__button`);

    startButton.simulate(`click`);

    expect(startButtonPressed).toHaveBeenCalledTimes(1);
  });
});
