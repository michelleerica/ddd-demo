import React from 'react';
import { shallow } from 'enzyme';
import BeerList from './BeerList';

describe('BeerList', () => {
  it('displays loading by default', () => {
    const wrapper = shallow(<BeerList />);
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('displays CardCollection once it loads data', () => {
    const wrapper = shallow(<BeerList />);
    expect(wrapper.find('CardCollection')).toHaveLength(0);

    wrapper.setState({
      data: [{ title: 'title' }],
    });
    expect(wrapper.find('CardCollection')).toHaveLength(1);
  });
});