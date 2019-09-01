import React from 'react';
import { shallow } from 'enzyme';
import BeerList from './BeerList';

jest.mock('../data/beer', () => [{
  title: 'abcdef',
}, {
  title: 'zyxwv',
}]);

describe('BeerList', () => {
  it('displays loading when there is no data', () => {
    const wrapper = shallow(<BeerList />);

    wrapper.setState((prevState) => ({
      ...prevState,
      data: [],
    }));

    expect(wrapper.text()).toContain('Loading...');
  });

  it('displays CardCollection once it has data', () => {
    const wrapper = shallow(<BeerList />);

    wrapper.setState({
      data: [{ title: 'title' }],
    });
    expect(wrapper.find('CardCollection')).toHaveLength(1);
  });

  it('only shows the data that has matching title to search term', () => {
    const wrapper = shallow(<BeerList />);

    wrapper.find('input').simulate('change', {
      target: {
        value: 'bcd'
      }
    });
    wrapper.find('button').simulate('click');

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    const cardCollectionWrapper = wrapper.find('CardCollection').dive();
    expect(cardCollectionWrapper.find('Card')).toHaveLength(1);
    expect(cardCollectionWrapper.find('Card').props().title).toEqual('abcdef');
  });
});