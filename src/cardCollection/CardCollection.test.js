import React from 'react';
import { shallow } from 'enzyme';
import CardCollection from './CardCollection';

describe('CardCollection', () => {
  it('does not render without data', () => {
    const wrapper = shallow(<CardCollection />);
    expect(wrapper.isEmptyRender()).toBeTruthy();
  });

  it('renders a cards with title from data', () => {
    const testTitle = 'Test Title';
    const data = [{
      title: testTitle,
    }];
    const wrapper = shallow(<CardCollection data={data}/>);

    expect(wrapper.find('Card')).toHaveLength(1);
    expect(wrapper.find(`Card[title="${testTitle}"]`).exists()).toBeTruthy();
  });
});