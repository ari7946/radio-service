import React from 'react';
import Month from '../month/month.component';
import './month-list.styles.scss';

const MonthList = ({ allMonths, yearTitle, handleMonth, year }) => {
  return (
    <div className="main-left">
      {/* <h2 className="year-title">{yearTitle}</h2> */}
      <div className="months-wrapper">
        {allMonths.map(month => (
          <Month 
            month={month} 
            handleMonth={handleMonth}
            year={year}
          />
        ))}
      </div>
    </div>
  )
}

export default MonthList;