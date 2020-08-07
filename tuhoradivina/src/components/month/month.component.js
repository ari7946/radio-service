import React from 'react';
import './month.styles.scss';

const Month = ({ month, handleMonth, activeMonth, handleActiveMonth, year }) => {
  const active = activeMonth === month;
  return (
    <button
      onClick={() => {
        handleMonth(month);
        handleActiveMonth(month, year);
      }}
      className={`
        month-button
        ${active ? 'active-month' : ''}
      `}
    >
      {month}
    </button>
  )
}

export default Month;