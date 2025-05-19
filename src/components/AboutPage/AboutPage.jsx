import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AboutPage.css';

// Импортируем изображения (замените на ваши реальные файлы)
import car1 from './car1.jpg';
import car2 from './car2.jpg';
import car3 from './car3.jpg';

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
        <h1>О нашей работе</h1>
      </div>
      
      <section className="about-section">
        <h2>Наше подразделение</h2>
        <p>Мы - современная компания с сильным профессиональным коллективом...</p>
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