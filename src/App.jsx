import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Header from './components/Header';
import SectionServices from './components/SectionServices';
import SectionWorkers from './components/SectionWorkers';
import Footer from './components/Footer';





function App() {
  return (
    <div className="page-div">
      <Header />
      <Homepage />
      <SectionServices />
      <SectionWorkers />
      <Footer />
    </div>
  );
}

export default App;
