import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');

  const textChangeHandler = (e) => {
    // console.log(e.target.value); // 입력한 글
    setEnteredText(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(enteredText);

    onAdd(enteredText); //부모(App.js)에게 전달.

    setEnteredText('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label>나의 목표</label>
        <input
          type='text'
          onChange={textChangeHandler}
          value={enteredText}
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
