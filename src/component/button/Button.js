import React from 'react';

const Button = ({ onClick, name }) => (
  <button
    className="btn"
    onClick={onClick}
  >
    {name}
  </button>
);

Button.defaultProps = ({
  name: 'Submit',
  onClick: () => {},
})

export default Button;


