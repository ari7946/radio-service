import React from 'react';
import Month from '../month/month.component';

const MonthList = ({ allMonths, yearTitle }) => {
  return (
    <div className="main-left">
      <h2>{yearTitle}</h2>
      {allMonths.map(month => (
        <Month month={month} />
      ))}
    </div>
  )
}

export default MonthList;