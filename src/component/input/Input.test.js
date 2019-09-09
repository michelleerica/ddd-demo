import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
  describe('with invalid characters', () => {
    it('does not allow invalid characters', () => {
      const wrapper = shallow(<Input />);
      wrapper.find('input').simulate('change', {target: {value: '.,*'}});
      expect(wrapper.find('input').props().value).toEqual('');
    });

    it('does not calls onChangeCallback', () => {
      const onChangeCallback = jest.fn();
      const wrapper = shallow(<Input onChangeCallback={onChangeCallback}/>);
      wrapper.find('input').simulate('change', {target: {value: '.,*'}});
      expect(onChangeCallback).toBeCalledTimes(0);
    });
  });

  describe('with valid characters', () => {
    it('accepts alphanumeric, space and dash input value', () => {
      const wrapper = shallow(<Input />);
      wrapper.find('input').simulate('change', {target: {value: 'abc123 -'}});
      expect(wrapper.find('input').props().value).toEqual('abc123 -');
    });

    it('calls onChangeCallback with accepted values', () => {
      const onChangeCallback = jest.fn();
      const wrapper = shallow(<Input onChangeCallback={onChangeCallback}/>);
      wrapper.find('input').simulate('change', {target: {value: 'test string'}});
      expect(onChangeCallback).toBeCalledWith('test string');
    });
  });
});

