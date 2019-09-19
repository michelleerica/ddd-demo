import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  it('accepts characters', () => {
    const wrapper = shallow(<Input />);

    wrapper.find('input')
      .simulate('change', { target: { value: 'abc123' } });

    expect(wrapper.find('input').html()).toContain('abc123');
  });

  it('calls callback on typing search term', () => {
    const mockCallback = jest.fn();

    const wrapper = shallow(<Input onChangeCallback={mockCallback} />);
    wrapper.find('input')
      .simulate('change', { target: { value: 'search term' } });

    expect(mockCallback).toBeCalledTimes(1);
    expect(mockCallback).toBeCalledWith('search term');
  });
});


