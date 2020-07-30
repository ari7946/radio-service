import React from 'react';
import Month from '../month/month.component';

const MonthList = ({ allMonths, yearTitle, handleMonth, year }) => {
  return (
    <div className="main-left">
      <h2>{yearTitle}</h2>
      {allMonths.map(month => (
        <Month 
          month={month} 
          handleMonth={handleMonth}
          year={year}
        />
      ))}
    </div>
  )
}

export default MonthList;