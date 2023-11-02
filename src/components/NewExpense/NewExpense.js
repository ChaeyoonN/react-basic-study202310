import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExpenseToggle] = useState(false); // 초기값 설정

  const startInsertModeHandler = () => setExpenseToggle(true); //이벤트
  const stopInsertModeHandler = () => setExpenseToggle(false); //이벤트

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (expenseToggle) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return <div className='new-expense'>{newExpenseContent}</div>;
};

export default NewExpense;
