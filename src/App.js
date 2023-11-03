import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const App = () => {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>
        <CourseList />
      </section>
    </div>
  );
};

export default App;
