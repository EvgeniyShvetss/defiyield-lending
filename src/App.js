import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Community from './components/Community';
import Footer from './components/Footer';
import TopSection from './components/TopSection';

const App = () => {
  return (
    <>
      <Header/>
      <TopSection/>
      <Features/>
      <Integrations/>
      <Community/>
      <Footer/>
    </>
  );
}

export default App;
