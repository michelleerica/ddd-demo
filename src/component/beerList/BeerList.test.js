import React from 'react';
import { shallow, mount } from 'enzyme';
import BeerList from './BeerList';
import beerData from '../../data/beer';

jest.mock('../../data/beer', () => [{
  title: 'abcdef',
}, {
  title: 'zyxwv',
}]);

describe('BeerList', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<BeerList />);
    expect(wrapper).toMatchSnapshot();
  });

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

  it('shows all the titles from data', () => {
    const wrapper = mount(<BeerList />);

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    expect(wrapper.text()).toContain(beerData[0].title);
    expect(wrapper.text()).toContain(beerData[1].title);
  });

  it('only shows the data that has matching title to search term', () => {
    const wrapper = shallow(<BeerList />);

    wrapper.find('Input').dive().find('input').simulate('change', {
      target: {
        value: 'bcd'
      }
    });
    wrapper.find('Button').dive().find('button').simulate('click');

    expect(wrapper.find('CardCollection')).toHaveLength(1);
    const cardCollectionWrapper = wrapper.find('CardCollection').dive();
    expect(cardCollectionWrapper.find('Card')).toHaveLength(1);
    expect(cardCollectionWrapper.find('Card').props().title).toEqual('abcdef');
  });
});