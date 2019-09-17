import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { BASE_PATH } from '../../config';

describe('Card', () => {
  it('displays an image', () => {
    
    const wrapper = shallow(<Card />);

    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('displays a specific image', () => {
    const imageName = "test";
    const expectedUrl = `${BASE_PATH}/${imageName}.jpg`;

    const wrapper = shallow(<Card image={imageName} />);
    
    expect(wrapper.find('img').prop('src')).toEqual(expectedUrl);
  });

  it('displays the name', () => {
    const testName = 'example name';

    const wrapper = shallow(<Card name={testName} />);

    expect(wrapper.find('.card-name').text()).toEqual(testName);
  });
});