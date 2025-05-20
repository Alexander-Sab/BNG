import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutPage.css';

// Импортируем изображения (замените на ваши реальные файлы)
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';
import car4 from './car4.jpg';
import car5 from './car5.jpg';
import car6 from './car6.jpg';

import service1 from './picture-service/service1.jpg';
import service2 from './picture-service/service2.jpg';
import service3 from './picture-service/service3.jpg';
import service4 from './picture-service/service4.jpg';
import service5 from './picture-service/service5.jpg';
import service6 from './picture-service/service6.jpg';
import service7 from './picture-service/service7.jpg';
import service8 from './picture-service/service8.jpg';
import service9 from './picture-service/service9.jpg';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Добавляем кнопку "Назад" вверху страницы */}
      <div className="about-header">
        <button 
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="Вернуться назад"
        >
          <FaArrowLeft />
        </button>
        {/* <h1>О нашей работе</h1> */}
      </div>
      
      <section className="about-section">
        <h2>Наше подразделение</h2>
        <p className="text2">Мы - современная компания с сильным профессиональным коллективом...</p>
       <div className="vehicle-gallery">
          <div className="vehicle-item">
            <img src={service1} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={service2} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={service3} alt="Грузовой транспорт" />
           
          </div>
          <div className="vehicle-item">
            <img src={service4} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={service5} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={service6} alt="Грузовой транспорт" />
          </div>
          <div className="vehicle-item">
            <img src={service7} alt="Грузовой транспорт" />
          </div>
          <div className="vehicle-item">
            <img src={service8} alt="Грузовой транспорт" />
          </div>
           <div className="vehicle-item">
            <img src={service9} alt="Грузовой транспорт" />
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Дружный коллектив</h2>
        <p>Наша команда состоит из высококвалифицированных специалистов...</p>
        <div className="team-gallery">
          {/* Здесь можно разместить фото сотрудников */}
        </div>
      </section>
      
      <section className="about-section vehicle-section">
        <h2>Новый автотранспорт</h2>
        <p>Мы располагаем современным парком транспортных средств...</p>
        <div className="vehicle-gallery">
          <div className="vehicle-item">
            <img src={car1} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={car2} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={car3} alt="Грузовой транспорт" />
           
          </div>
          <div className="vehicle-item">
            <img src={car4} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={car5} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={car6} alt="Грузовой транспорт" />
           
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <h2>Тренажерный зал</h2>
        <p>Для наших сотрудников мы оборудовали современный тренажерный зал...</p>
        <div className="gym-gallery">
          {/* Здесь можно разместить фото зала */}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;