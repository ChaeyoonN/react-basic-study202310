import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, id, value, label, isValid, ...rest }) => {
  return (
    <div className={`${styles.control} ${!isValid ? styles.invalid : ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        {...rest}
      />
    </div>
  );
};

export default Input;
