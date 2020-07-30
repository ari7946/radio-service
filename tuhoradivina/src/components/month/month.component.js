import React from 'react';

const Month = ({ month, handleMonth }) => {
  return (
    <button
      onClick={() => handleMonth(month)}
    >
      {month}
    </button>
  )
}

export default Month;