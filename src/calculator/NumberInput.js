import React, {useState} from 'react';

const NumberInput = () => {
  const [value, setValue] = useState("");

  const handleValueChange = (value) => {
    if (value.match(/^[0-9]*$/)) {
      setValue(value);
    }
  }

  return (
    <input type="text" pattern="^[0-9]*$" value={value} onChange={e => handleValueChange(e.target.value)}/>
  );
}

export default NumberInput;