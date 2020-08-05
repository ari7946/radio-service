import React from 'react';
import './month.styles.scss';

const Month = ({ month, handleMonth }) => {
  return (
    <button
      onClick={() => handleMonth(month)}
      className="month-button"
    >
      {month}
    </button>
  )
}

export default Month;