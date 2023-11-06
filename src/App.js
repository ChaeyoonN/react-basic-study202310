import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const AddUserHandler = (user) => {
    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };
  return (
    <div>
      <AddUsers onAddUser={AddUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
