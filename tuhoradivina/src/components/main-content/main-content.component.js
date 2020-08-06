import React from 'react';
import MonthList from '../month-list/month-list.component';
import PlayerList from '../player-list/player-list.component';
import Recent from '../recent/recent.component';
import Navbar from '../nav/nav.component'
import data from '../data/data';
import './main-content.styles.scss'

const MainContent = ({ allMonths, yearTitle, audioData, monthTitle, handleMonth, year, handleYear }) => {

  return (
    <main>

      <div className="archive-container">
        <Navbar 
          handleYear={handleYear}
        />

        <div className="archive-month-player-wrapper">
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
        </div>
      </div>

      <Recent />
    </main> 
  )
}

export default MainContent;