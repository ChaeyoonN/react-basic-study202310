import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 삽고수되기',
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  //input에게 전달할 함수
  const addGoalHandler = (text) => {
    console.log('전달받은 텍스트: ', text);
    const newGoal = {
      id: Math.random().toString(),
      text: text,
    };

    //상태변수(배열)을 수정
    // setGoals([...goals, newGoal]); //배열 전체를 갈아야 한다!
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    //이렇게 써도 됌 (순서 보장)
  };

  //삭제 이벤트 핸들러를 CourseItem까지 내려보내야 됌.
  const deleteGoalHandler = (id) => {
    //방법1.
    // console.log('전달된 id: ', id);
    // const updateGoals = [...goals]; // 상태 배열 그대로 복사해서 가져옴.
    // const index = updateGoals.findIndex((goal) => goal.id === id);
    // console.log(index);
    // updateGoals.splice(index, 1); //인덱스(부터), 지울 갯수, (지운 자리에 추가할 요소)

    //방법2.
    const updateGoals = goals.filter((goal) => goal.id !== id); //필터는 일치하는 요소 리턴

    setGoals(updateGoals); // 배열 갈아끼우기
  };

  //CourseList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: 'red',
        fontSize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요!!
    </p>
  );

  if (goals.length > 0) {
    listContent = (
      <CourseList
        items={goals}
        onDelete={deleteGoalHandler}
      />
    );
  }

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id='goals'>{listContent}</section>
    </div>
  );
};

export default App;
