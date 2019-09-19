import React, { useState } from 'react';

const Input = ({ onChangeCallback }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <input
      value={inputValue}
      onChange={e => {
        onChangeCallback(e.target.value);
        setInputValue(e.target.value);
      }}
    />
  );
}

Input.defaultProps = ({
  onChangeCallback: () => {},
})

export default Input;

