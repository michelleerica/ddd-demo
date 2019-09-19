import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import beerData from './data/beer';

jest.mock('./data/beer', () => [{
  name: 'abcdef',
}, {
  name: 'zyxwv',
}]);

describe('App', () => {
  it('displays CardCollection', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);
  });

  it('shows all the names from data', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    expect(wrapper.text()).toContain(beerData[0].name);
    expect(wrapper.text()).toContain(beerData[1].name);
  });

  it('only shows beers with matching name', () => {
    const wrapper = mount(<App />);

    let cardElement = wrapper.find('Card');
    expect(wrapper.find('Card')).toHaveLength(2);

    wrapper.find('input')
      .simulate('change', {
        target: {
          value: 'bcd'
        }
      });

    cardElement = wrapper.find('Card');
    expect(cardElement).toHaveLength(1);
    expect(cardElement.html()).toContain('abcdef');
  });
});