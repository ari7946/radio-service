import React from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import data from '../data/data';
import './main-content.styles.scss'

const MainContent = ({ allMonths, yearTitle, audioData, monthTitle, handleMonth, year }) => {

  return (
    <main>
      <MonthList 
        allMonths={allMonths}
        yearTitle={yearTitle}
        handleMonth={handleMonth}
        year={year}
      />

      <PlayerList 
        monthTitle={monthTitle}
        audioData={audioData}
      />

    </main> 
  )
}

export default MainContent;