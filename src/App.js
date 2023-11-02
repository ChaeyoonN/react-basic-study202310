import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // const $h2 = React.createElement('h2', null, '반가워요~~');
  // const $h2 = <h2>반가워요~</h2>;\

  //지출 항목 객체 배열
  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 17000,
      date: new Date(2021, 3 - 1, 28),
    },
  ];

  console.log('앱 실행!');

  //ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    //매개변수명은 자유.
    console.log('App 컴포넌트에서 응답함!');
    console.log(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
