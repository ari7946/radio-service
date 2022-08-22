import React from 'react';
import Month from '../month/month.component';
import './month-list.styles.scss';

const MonthList = ({
	allMonths,
	handleMonth,
	year,
	handleActiveMonth,
	activeMonth,
}) => {
	return (
		<div className='months-wrapper'>
			{allMonths.map((month) => (
				<Month
					month={month}
					handleMonth={handleMonth}
					year={year}
					handleActiveMonth={handleActiveMonth}
					activeMonth={activeMonth}
					key={`${month}/${year}`}
				/>
			))}
		</div>
	);
};

export default MonthList;
