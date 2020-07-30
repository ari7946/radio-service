import React from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import data from '../data/data';
import './main-content.styles.scss'

const MainContent = () => {
  const { monthTitle } = data;
  const { allMonths, yearTitle } = data.sixteen;
  const { audioData } = data.sixteen.monthsData.enero;

  return (
    <main>
      <MonthList 
        allMonths={allMonths}
        yearTitle={yearTitle}
      />
      
      <PlayerList 
        monthTitle={monthTitle}
        audioData={audioData}
      />

    </main> 
  )
}

export default MainContent;