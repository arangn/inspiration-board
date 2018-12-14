import React from 'react';
import Board from '../Board';
import { shallow, mount } from 'enzyme';

const CARDS = [
  {
    name: "test card 1",
    emoji: "emoji"
  },
  {
    name: "test card 2",
    emoji: "emoji"
  }
];

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // First Mount the Component in the testing DOM
    // Arrange

    const cards = CARDS;
    const wrapper = shallow(
      <Board
        cards={cards}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test('renders without crashing even with no cards', () => {
    // First Mount the Component in the testing DOM
    // Arrange

    const cards = [];
    const wrapper = shallow(
      <Board
        cards={cards}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test('successfully deep mounts', () => {
    // First Mount the Component in the testing DOM
    // Arrange
    const wrapper = mount(
      <Board
        cards={CARDS}
        />
    );

    // Assert that it looks like the last snapshot
    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});
