import React, { useState, useEffect } from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import Recent from '../recent/recent.component';
import Navbar from '../nav/nav.component'
import data from '../data/data';
import './main-content.styles.scss'

const MainContent = ({ allMonths, yearTitle, audioData, monthTitle, handleMonth, year }) => {
  const [activeMonthSixteen, setActiveMonthSixteen] = useState('enero');
  const [activeMonthFifteen, setActiveMonthFifteen] = useState('julio');
  const [activeMonthFourteen, setActiveMonthFourteen] = useState('enero');

  const firstHalf = allMonths.slice(0, 6);
  const secondHalf = year === "sixteen" || year === 'fourteen' ? allMonths.slice(6) : null;
  let activeMonth;

  if (year === 'sixteen') {
    activeMonth = activeMonthSixteen
  } else if (year === 'fifteen') {
    activeMonth = activeMonthFifteen;
  } else if (year === 'fourteen') {
    activeMonth = activeMonthFourteen;
  } else {
    activeMonth = ''
  }
  
  const handleActiveMonth = (month, currentYear) => {
    if (currentYear === 'sixteen') {
      setActiveMonthSixteen(month);
    } else if (currentYear === 'fifteen') {
      setActiveMonthFifteen(month)
    } else if (currentYear === 'fourteen') {
      setActiveMonthFourteen(month)
    }
  }

  useEffect(() => {
    handleActiveMonth();
  }, [activeMonthSixteen, activeMonthFifteen, activeMonthFourteen, year])

  console.log('year', year)
  return (
    <div className="main-wrapper">
      {firstHalf.length && year !== 'recent' && (
        <MonthList 
          allMonths={firstHalf}
          yearTitle={yearTitle}
          handleMonth={handleMonth}
          year={year}
          handleActiveMonth={handleActiveMonth}
          activeMonth={activeMonth}
        />
      )}

      {secondHalf && year !== 'recent' && (
        <MonthList 
          allMonths={secondHalf}
          yearTitle={yearTitle}
          handleMonth={handleMonth}
          year={year}
          handleActiveMonth={handleActiveMonth}
          activeMonth={activeMonth}
        />
      )}

      <PlayerList 
        monthTitle={monthTitle}
        audioData={audioData}
      />
    </div>
  )
}

export default MainContent;