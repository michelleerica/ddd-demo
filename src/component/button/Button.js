import React from 'react';

const Button = ({ onClickCallback, name }) => (
  <button
    className="btn"
    onClick={onClickCallback}
  >
    {name}
  </button>
);

Button.defaultProps = ({
  name: 'Submit',
  onClickCallback: () => {},
})

export default Button;


