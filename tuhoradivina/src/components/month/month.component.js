import React from 'react';
import './month.styles.scss';

const Month = ({
	month,
	handleMonth,
	activeMonth,
	handleActiveMonth,
	year,
}) => {
	console.log('monthyear', month, year);
	// disabled because there actually isn't data available and it created an error
	const shouldDisable = month === 'diciembre' && year === 'sixteen';
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
			disabled={shouldDisable}
		>
			{month}
		</button>
	);
};

export default Month;
