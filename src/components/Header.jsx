import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Убедитесь, что этот импорт корректен
import icon from './sluzhba_final.svg';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="about-page">
      {/* Добавляем кнопку "Назад" вверху страницы */}
      <div className="about-header">
       <button className="button-icon-slugba" onClick={() => navigate(-1)}>
  <img className="icon-slugba" src={icon} alt="Назад"  />
</button>
        {/* <h1>О нашей работе</h1> */}
      </div>
      
      <header className="header">
        <h1>Федеральная Служба ВНГ РФ</h1>
        <p className="header-p1">приглашает на работу<br /> в городе Москве:</p>
        <p className="header-p2">полицейских, полицейских (водителей)</p>
      </header>
    </div>
  );
}