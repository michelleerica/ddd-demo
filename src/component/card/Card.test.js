import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('displays the name', () => {
    const testName = 'example name';

    const wrapper = shallow(<Card name={testName}/>);

    expect(wrapper.find('.card-name').text()).toEqual(testName);
  });

  it('displays the an image', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('img')).toHaveLength(1);
  });
});