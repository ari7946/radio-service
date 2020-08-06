import React from 'react';
import Month from '../month/month.component';
import './month-list.styles.scss';

const MonthList = ({ allMonths, yearTitle, handleMonth, year }) => {
  return (
    <div className="months-wrapper">
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