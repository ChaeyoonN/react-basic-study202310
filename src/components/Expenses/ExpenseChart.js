import React from 'react';

import Chart from '../Chart/Chart';

const ExpenseChart = ({ expenses }) => {
  console.log('expenses: ', expenses);

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // 선택 년도의 모든 지출 데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출액을 ChartDataPoints의 월 value에 누적.
  expenses.forEach((exp) => {
    // console.log(exp.date.getMonth());
    // console.log(exp.price);
    // 이 월 정보는 실제 월에서 1이 빠져있다.
    const expenseMonth = exp.date.getMonth(); // Mar: 2라고 출력
    const expensePrice = exp.price;

    chartDataPoints[expenseMonth].value += expensePrice;
    // console.log(chartDataPoints);
  });
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
