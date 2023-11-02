import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({ onChangeFilter }) => {
  const dropDownChangeHandler = (e) => {
    //selected된 year의 값을 Expenses에서 사용할 수 있도록
    //올려보내 보세요.
    const seletedYear = e.target.value;
    console.log(seletedYear);
    onChangeFilter(seletedYear);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
