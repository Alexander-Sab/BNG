import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Background from './components/Background';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ContactInfo from './components/ContactInfo';
import MapComponent from './components/MapComponent'; 
import Sidebar from './components/Sidebar/Sidebar';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Footer'; 
import HeaderContacts from './components/HeaderContacts';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Background>
          <div className="app-container">
            <HeaderContacts />
            <Sidebar />
            
            <div className="main-content-area">
              <Routes>
                <Route index element={
                  <>
                 
                    <Header />
                    <MainContent />
                    <MapComponent />
                    <ContactInfo />
                    {/* Добавляем Footer здесь */}
                  </>
                } />
                <Route path="/about" element={<>
                  <AboutPage />
                  {/* И здесь, если нужно в about */}
                </>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div> 
          </div>
          <Footer />
        </Background>
      </div>
    </Router>
  );
}

export default App;