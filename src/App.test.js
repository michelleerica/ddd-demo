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
  it('displays loading when there is no data', () => {
    const wrapper = shallow(<App />);

    wrapper.setState((prevState) => ({
      ...prevState,
      data: [],
    }));

    expect(wrapper.text()).toContain('Loading...');
  });

  it('displays CardCollection once it has data', () => {
    const wrapper = shallow(<App />);

    wrapper.setState({
      data: [{ name: 'name' }],
    });
    expect(wrapper.find('CardCollection')).toHaveLength(1);
  });

  it('shows all the names from data', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    expect(wrapper.text()).toContain(beerData[0].name);
    expect(wrapper.text()).toContain(beerData[1].name);
  });

  it('only shows the data that has matching name to search term', () => {
    const wrapper = shallow(<App />);

    wrapper.find('Input').dive().find('input').simulate('change', {
      target: {
        value: 'bcd'
      }
    });
    wrapper.find('Button').dive().find('button').simulate('click');

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    const cardCollectionWrapper = wrapper.find('CardCollection').dive();
    expect(cardCollectionWrapper.find('Card')).toHaveLength(1);
    expect(cardCollectionWrapper.find('Card').props().name).toEqual('abcdef');
  });
});