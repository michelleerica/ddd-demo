import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders button with name', () => {
    const wrapper = shallow(<Button name={'button-name'}/>);

    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').props().children).toEqual('button-name');
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}/>);
    wrapper.find('button').simulate('click');
    expect(onClick).toBeCalledTimes(1);
  });
});

