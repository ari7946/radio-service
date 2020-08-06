import React from 'react';
import './month.styles.scss';

const Month = ({ month, handleMonth }) => {
  return (
    <div>
      <button
        onClick={() => handleMonth(month)}
        className="month-button"
      >
        {month}
      </button>
    </div>
  )
}

export default Month;