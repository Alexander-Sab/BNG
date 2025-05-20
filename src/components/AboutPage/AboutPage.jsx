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

import sport1 from './sport/sport1.jpg';
import sport2 from './sport/sport2.jpg';
import sport3 from './sport/sport3.jpg';
import sport4 from './sport/sport4.jpg';
import sport5 from './sport/sport5.jpg';
import sport6 from './sport/sport6.jpg';


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
<div className="unit-description">
  <p className="mission-statement">
    Специализированное подразделение ВНГ РФ выполняет задачи по охране общественного порядка 
    и безопасности на объектах. Основные направления деятельности:
  </p>
  
  <ul className="task-list">
    <li className="task-item">
      <div className="task-icon">🛡️</div>
      <div>
        <h3>Охрана объектов</h3>
        <p>Круглосуточная охрана с применением современных систем контроля доступа</p>
      </div>
    </li>
    <li className="task-item">
      <div className="task-icon">🚔</div>
      <div>
        <h3>Группы оперативного реагирования</h3>
        <p>Мобильные наряды для задержания правонарушителей и пресечения преступлений</p>
      </div>
    </li>
    <li className="task-item">
      <div className="task-icon">👮</div>
      <div>
        <h3>Постовая служба</h3>
        <p>Обеспечение правопорядка на закреплённых территориях</p>
      </div>
    </li>
  </ul>
  
  <div className="team-values">
    <h3>Наши принципы:</h3>
    <div className="values-grid">
      <div className="value-card">
        <h4>Взаимовыручка</h4>
        <p>"Сам погибай - товарища выручай" - не просто слова, а закон службы</p>
      </div>
      <div className="value-card">
        <h4>Профессионализм</h4>
        <p>Постоянное совершенствование боевых и правовых навыков</p>
      </div>
      <div className="value-card">
        <h4>Честь мундира</h4>
        <p>Ответственность за каждое принятое решение</p>
      </div>
    </div>
  </div>
</div>
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
      <section className="about-section vehicle-section">
        <h2>Современный автопарк</h2>
<div className="vehicle-description">
  <p>На вооружении подразделения — новейшие модели спецтранспорта, обеспечивающие:</p>
  <div className="vehicle-advantages">
    <span>▸ Мобильность</span>
    <span>▸ Надёжность</span> 
    <span>▸ Безопасность</span>
  </div>
</div>
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
        <h2>Спорт - наша традиция</h2>
<div className="sport-description">
  <p>У нас не просто работа - у нас настоящая дружба, скреплённая совместными 
  тренировками и спортивными достижениями!</p>
  
  <div className="sport-highlights">
    <div className="highlight-item">
      <h3>Силовые тренировки</h3>
      <p> Тренажёрный зал с профессиональным оборудованием</p>
    </div>
    <h3>Огневая и тактическая подготовка</h3>
<div className="firearm-training">
  <p>
    На базе современного тирового комплекса мы проводим:
  </p>
  
  <div className="training-types">
    <div className="type-card">
      <h4>Стрелковая подготовка</h4>
      <ul>
        <li>Практические стрельбы из пистолетов Макарова и Ярыгина</li>
        <li>Тренировки с автоматами АК-74</li>
        <li>Снайперская подготовка (при наличии специализации)</li>
      </ul>
    </div>
    
    <div className="type-card">
      <h4>Тактические учения</h4>
      <ul>
        <li>Штурмовые действия в зданиях</li>
        <li>Конвоирование и охрана объектов</li>
        <li>Действия в условиях ЧС</li>
      </ul>
    </div>
  </div>
</div>
    <div className="highlight-item">
      <h3>Корпоративный спорт</h3>
      <p>Футбольная и волейбольная команды, участвующие в ведомственных турнирах</p>
    </div>
  </div>
  
  <p className="sport-motto">"В здоровом теле - боевой дух!" - наш неофициальный девиз</p>
</div>
          <div className="vehicle-gallery">
          <div className="vehicle-item">
            <img src={sport1} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={sport2} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={sport3} alt="Грузовой транспорт" />
           
          </div>
          <div className="vehicle-item">
            <img src={sport4} alt="Компактный городской автомобиль" />
            
          </div>
          <div className="vehicle-item">
            <img src={sport5} alt="Вместительный микроавтобус" />
            
          </div>
          <div className="vehicle-item">
            <img src={sport6} alt="Грузовой транспорт" />
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;