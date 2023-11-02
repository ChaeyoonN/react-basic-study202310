import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToggle }) => {
  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    setUserInput((prevUserInput) => {
      console.log(prevUserInput);
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
  };

  const priceChangHandler = (e) => {
    setUserInput({
      ...userInput,
      price: e.target.value, // 문자열
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value, // 문자열
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단

    const newExpense = {
      id: Math.random(),
      title: userInput.title,
      price: +userInput.price, //Number()또는 + 붙여서 정수화
      date: new Date(userInput.date), //날짜로 변환
    };
    console.log('submit 버튼을 누름!');
    console.log(newExpense);

    onSaveExpense(newExpense); //호출한 곳인 App.js로 감

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });

    onToggle();
  };

  const cancelInsertHandler = () => {
    // console.log('취소 버튼 누름!');
    onToggle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={cancelInsertHandler}
        >
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
