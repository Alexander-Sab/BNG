import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ContactInfo from './components/ContactInfo';
import MapComponent from './components/MapComponent'; 
import Sidebar from './components/Sidebar/Sidebar';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Background>
          <div className="app-container">
            <Sidebar />
            
            <div className="main-content-area">
              <Routes>
                <Route index element={
                  <>
                    <Header />
                    <MainContent />
                    <MapComponent />
                    <ContactInfo />
                  </>
                } />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>
          </div>
        </Background>
      </div>
    </Router>
  );
}

export default App;