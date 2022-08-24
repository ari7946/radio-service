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
		<aside className='months-wrapper'>
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
		</aside>
	);
};

export default MonthList;
