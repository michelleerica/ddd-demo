import React from 'react';
import { shallow } from 'enzyme';
import BeerList from './BeerList';

describe('BeerList', () => {
  it('displays loading by default', () => {
    const wrapper = shallow(<BeerList />);
    expect(wrapper.text()).toEqual('Loading...');
  });
});