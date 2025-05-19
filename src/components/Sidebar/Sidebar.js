import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest('.sidebar') && !e.target.closest('.sidebar-toggle')) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h2>О нашей работе</h2>
          
          
          <h3>Контакты</h3>
          <ul className="contact-list">
            <li>Телефон: <a href="tel:+79250571946">+7 925 057-19-46</a></li>
            <li >Telegram: <a className="cont-a" href="https://t.me/Aleksandr_Saprykin"  target="_blank" 
           rel="noopener noreferrer">
            @Aleksandr_Saprykin
            </a>
        </li>

            <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
          </ul>
          
          <h3>Адрес</h3>
          <p>г. Москва, ул. Тушинская, д. 9, корпус 3</p>
          
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;