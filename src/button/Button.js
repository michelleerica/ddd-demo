import React from 'react';

const Button = ({ onClick, name }) => (
  <button
    className="btn waves-effect waves-light"
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


