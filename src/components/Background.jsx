import React from 'react';
import './Background.css';
import backgroundImage from './logo.webp';

export default function Background({ children }) {
  return (
    <div 
      className="background-container"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        minHeight: '100vh' // Добавлено
      }}
    >
      {children}
    </div>
  );
}