import React from 'react';

const Month = ({ month }) => {
  return (
    <button>
      {month.toUpperCase()}
    </button>
  )
}

export default Month;