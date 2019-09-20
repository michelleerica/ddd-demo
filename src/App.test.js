import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

jest.mock('./data/beer', () => [{
  name: 'stout',
}, {
  name: 'pale ale',
}]);

describe('App', () => {
  it('displays CardCollection', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);
  });

  it('shows all the names from data', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);

    expect(wrapper.html()).toContain('stout');
    expect(wrapper.html()).toContain('pale ale');
  });

  it('only shows beers with matching name', () => {
    const wrapper = mount(<App />);

    let cardElement = wrapper.find('Card');
    expect(wrapper.find('Card')).toHaveLength(2);

    wrapper.find('input')
      .simulate('change', {
        target: {
          value: 'ale'
        }
      });

    cardElement = wrapper.find('Card');
    expect(cardElement).toHaveLength(1);
    expect(cardElement.html()).toContain('pale ale');
  });
});