import React from 'react';
import Navbar from './components/nav/nav.component';
import Header from './components/header/header.component';
import MainContent from './components/main-content/main-content.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
