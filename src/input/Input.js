import React, {useState} from 'react';

const Input = ({value, onChange}) => {
  const [inputValue, setValue] = useState(value);

  const handleChange = (value) => {
    if (value.match(/^[a-zA-Z0-9 -]*$/)) {
      setValue(value);
      onChange(value);
    }
  }

  return (
    <input
      type="text"
      value={inputValue}
      onChange={e => handleChange(e.target.value)}
    />
  );
}

Input.defaultProps = ({
  value: '',
  onChange: () => {},
})

export default Input;

