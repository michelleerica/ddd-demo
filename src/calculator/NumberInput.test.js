import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from './NumberInput';

describe('NumberInput', () => {
  it('accepts numeric input value', () => {
    const wrapper = shallow(<NumberInput />);

    wrapper.find('input').simulate('change', {target: {value: '123'}});

    expect(wrapper.find('input').props().value).toEqual('123');
  });

  it('does not accept non-numeric input', () => {
    const wrapper = shallow(<NumberInput />);

    wrapper.find('input').simulate('change', {target: {value: 'a'}});

    expect(wrapper.find('input').props().value).toEqual('');
  });
});




// renders react component
//Shallow
//1 layer

//Mount
// all the layers
