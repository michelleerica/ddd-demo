import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('displays the title', () => {
    const testTitle = 'example title';

    const wrapper = shallow(<Card title={testTitle}/>);

    expect(wrapper.find('.title').text()).toEqual(testTitle);
  });
})