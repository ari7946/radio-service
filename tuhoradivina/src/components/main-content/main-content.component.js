import React from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import Recent from '../recent/recent.component';
import Navbar from '../nav/nav.component'
import data from '../data/data';
import './main-content.styles.scss'

const MainContent = ({ allMonths, yearTitle, audioData, monthTitle, handleMonth, year, handleYear }) => {
  const firstHalf = allMonths.slice(0, 6);
  const secondHalf = 
    year === "sixteen" || year === 'fourteen' ? allMonths.slice(6) : null;
  console.log('second', firstHalf)
  return (
    <main>
      <div className="main-wrapper">

        <PlayerList 
          monthTitle={monthTitle}
          audioData={audioData}
        />

        {firstHalf.length && (
          <>
          <MonthList 
            allMonths={firstHalf}
            yearTitle={yearTitle}
            handleMonth={handleMonth}
            year={year}
          />
          </>
        )}

        {secondHalf && (
          <MonthList 
            allMonths={secondHalf}
            yearTitle={yearTitle}
            handleMonth={handleMonth}
            year={year}
          />
        )}

      </div>
    </main> 
  )
}

export default MainContent;