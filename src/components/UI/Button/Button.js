import React from 'react';
import './Button.css';

const Button = ({ type, onClick, children }) => {
  //Button 안에 있는 것이 children
  return (
    <button
      type={type}
      className='button'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
