import React, { useState } from 'react';

const Input = ({ onChangeCallback }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value) => {
    onChangeCallback(value);
    setInputValue(value);
  }

  return (
    <input
      value={inputValue}
      placeholder= "Search..."
      onChange={e => handleChange(e.target.value)}
    />
  );
}

Input.defaultProps = ({
  onChangeCallback: () => {},
})

export default Input;

