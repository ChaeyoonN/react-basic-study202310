import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  // 1년치 지출 총액이 필요하다! (그래야 비율을 설정할 수 있으니까!)

  const dataPointValues = dataPoints.map((dp) => dp.value);
  //value들만 모아놓은 배열 추출.
  //지출액들만 월별로 추출.

  // 1년치 총액
  // a: 리턴 결과에 대한 누적값, b : 배열에서 하나씩 꺼낸 값
  const totalValue = dataPointValues.reduce(
    (a, b) => a + b,
    // console.log(`a: ${a}, b: ${b}`);
    0
  ); // 0: 초기인덱스값

  // 그 중에 제일 지출이 높은 값
  const maximumValue = Math.max(...dataPointValues);
  console.log('maximum: ', maximumValue);

  return (
    <div className='chart'>
      {dataPoints.map(({ label, value }) => {
        //구조분해할당으로 받음
        // console.log(label);
        // console.log(value);
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            maxValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
