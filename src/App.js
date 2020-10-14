import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Features from './components/Features/Features'
import Calendar from './components/Calendar/Calendar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      {/* <Calendar /> */}
      <Footer />
    </>
  );
}

export default App;
