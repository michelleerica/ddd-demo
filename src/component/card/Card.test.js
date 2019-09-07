import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  it('displays the title', () => {
    const testTitle = 'example title';

    const wrapper = shallow(<Card title={testTitle}/>);

    expect(wrapper.find('.card-title').text()).toEqual(testTitle);
  });

  it('displays the an image', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper.find('img')).toHaveLength(1);
  });
});