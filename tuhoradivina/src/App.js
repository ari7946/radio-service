import React, { useState } from 'react';
import Navbar from './components/nav/nav.component';
import Header from './components/header/header.component';
import MainContent from './components/main-content/main-content.component';
import './App.css';
import data from './components/data/data';

function App() {
  const initialAudioData = data.sixteen.monthsData.enero.audioData;
  const initialAllMonths = data.sixteen.allMonths;
  const initialYearTitle = data.sixteen.yearTitle;
  const initialMonthTitle = data.sixteen.monthsData.enero.monthTitle;
  const initialYear = data.sixteen.year;

  const [yearTitle, setYearTitle] = useState(initialYearTitle);
  const [allMonths, setAllMonths] = useState(initialAllMonths);
  const [audioData, setAudioData] = useState(initialAudioData);
  const [monthTitle, setMonthTitle] = useState(initialMonthTitle);
   const [year, setYear] = useState(initialYear);

  const handleMonth = (year, month) => {
    const audioData = data[year].monthsData[month]
    console.log('audioData', audioData);

  }

  return (
    <div>
      <Header />
      <Navbar />
      <MainContent 
        allMonths={allMonths}
        yearTitle={yearTitle}
        audioData={audioData}
        monthTitle={monthTitle}
        handleMonth={handleMonth}
        year={year}
      />
    </div>
  );
}

export default App;