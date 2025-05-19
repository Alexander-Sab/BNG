import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ContactInfo from './components/ContactInfo';
import MapComponent from './components/MapComponent'; 
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Background>
        <div className="app-container">
          <Sidebar />
          <Header />
          <div className="content-wrapper">
            <MainContent />
            <MapComponent /> {/* Добавьте карту здесь */}
            <ContactInfo />
          </div>
        </div>
      </Background>
    </div>
  );
}

export default App;
