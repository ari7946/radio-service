import React, { useState } from 'react';
import Navbar from './components/nav/nav.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import MainContent from './components/main-content/main-content.component';
import './App.scss';
import data from './components/data/data';
import { Router, Switch, Route } from 'react-router-dom';

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

  const handleMonth = (month) => {
    const monthData = data[year].monthsData[month];
    const { monthTitle, audioData } = monthData;
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }

  const handleYear = (yearSelected) => {
    const { yearTitle, year, allMonths, monthsData } = data[yearSelected];

    // 2016 and 2016 both begin in Janurary, while 2015 begins in July. 
    // (according to the data available, obviously not on an actual calendar) 
    const { monthTitle, audioData } = 
      yearSelected === 'fifteen' 
        ? monthsData.julio 
        : monthsData.enero;

    setAllMonths(allMonths);
    setYearTitle(yearTitle);
    setYear(year);
    setMonthTitle(monthTitle);
    setAudioData(audioData);
  }

  const handleRecent = () => {
    setAudioData(data.recent);
    setYear('recent');
  }

  return (
    <>
      <Header 
        handleYear={handleYear}
        handleRecent={handleRecent}
      />
      <div className="main-container">
        <Switch>
          <Route
            exact 
            path='/'
            render={(props) => (
              <MainContent 
                {...props}
                allMonths={allMonths}
                yearTitle={yearTitle}
                audioData={audioData}
                monthTitle={monthTitle}
                handleMonth={handleMonth}
                year={year}
                handleYear={handleYear}
              />
            )}
          />
        </Switch> 
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
