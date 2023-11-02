import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  return (
    <div className='chart'>
      {dataPoints.map((dp) => (
        //배열 안의 객체 받음
        <ChartBar
          key={dp.label}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
