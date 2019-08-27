import React from 'react';
import { shallow } from 'enzyme';
import CardCollection from './CardCollection';

describe('CardCollection', () => {
  it('does not render without data', () => {
    const wrapper = shallow(<CardCollection />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });
});