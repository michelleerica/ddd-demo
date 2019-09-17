import React from 'react';
import { shallow } from 'enzyme';
import CardCollection from './CardCollection';

describe('CardCollection', () => {
  it('does not render without data', () => {
    const wrapper = shallow(<CardCollection />);

    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('renders a card with name from data', () => {
    const testName = 'Test Name';
    const data = [{
      name: testName,
    }];
    const wrapper = shallow(<CardCollection data={data}/>);

    expect(wrapper.find('Card')).toHaveLength(1);
    expect(wrapper.find(`Card[name="${testName}"]`).exists()).toBeTruthy();
  });

  it('renders a card for each item in data', () => {
    const data = [{
      name: 'Test Name 1',
    }, {
      name: 'Test Name 2',
    }];
    const wrapper = shallow(<CardCollection data={data}/>);

    expect(wrapper.find('Card')).toHaveLength(2);
  });
});