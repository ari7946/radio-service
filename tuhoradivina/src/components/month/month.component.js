import React from 'react';

const Month = ({ month, handleMonth, year }) => {
  return (
    <button
      onClick={() => handleMonth(year, month)}
    >
      {month.toUpperCase()}
    </button>
  )
}

export default Month;