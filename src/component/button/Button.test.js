import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders button with name', () => {
    const wrapper = shallow(<Button name={'button-name'}/>);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().children).toEqual('button-name');
  });

  it('calls onClickCallback when clicked', () => {
    const onClickCallback = jest.fn();
    const wrapper = shallow(<Button onClickCallback={onClickCallback}/>);
    wrapper.find('button').simulate('click');
    expect(onClickCallback).toBeCalledTimes(1);
  });
});

