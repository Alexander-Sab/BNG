import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import  OptimizedImage  from './OptimizedImage/OptimizedImage'

import 'react-lazy-load-image-component/src/effects/blur.css';
import './AboutPage.css';

// Импортируем изображения (замените на ваши реальные файлы)
import car1 from './car1.webp';
import car2 from './car2.webp';
import car3 from './car3.webp';
import car4 from './car4.webp';
import car5 from './car5.webp';
import car6 from './car6.webp';

import service1 from './picture-service/service1.webp';
import service2 from './picture-service/service2.webp';
import service3 from './picture-service/service3.webp';
import service4 from './picture-service/service4.webp';
import service5 from './picture-service/service5.webp';
import service6 from './picture-service/service6.webp';
import service7 from './picture-service/service7.webp';
import service8 from './picture-service/service8.webp';
import service9 from './picture-service/service9.webp';

import sport1 from './sport/sport1.webp';
import sport2 from './sport/sport2.webp';
import sport3 from './sport/sport3.webp';
import sport4 from './sport/sport4.webp';
import sport5 from './sport/sport5.webp';
import sport6 from './sport/sport6.webp';

import orel from '../orel.png';


const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="arms-container">
                <img src={orel} alt="Герб" className="arms" />
              </div>
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
      <div className="task-h3">
        <h3>Охрана объектов</h3>
        <p>Круглосуточная охрана с применением современных систем контроля доступа</p>
      </div>
    </li>
    <li className="task-item">
      <div className="task-icon">🚔</div>
      <div className="task-h3">
        <h3>Группы оперативного реагирования</h3>
        <p>Мобильные наряды для задержания правонарушителей и пресечения преступлений</p>
      </div>
    </li>
    <li className="task-item">
      <div className="task-icon">👮</div>
      <div className="task-h3">
        <h3 >Постовая служба</h3>
        <p>Обеспечение правопорядка на закреплённых территориях</p>
      </div>
    </li>
  </ul>
  
  <div className="team-values_h3">
    <h3 className="team-values_h3">Наши принципы:</h3>
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
            <OptimizedImage  src={service1} alt="сотрудник и машина" />
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service2} alt="два сотрудника и машина" />
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service3} alt="сотрудник машина с включенными мигалками"/>
           
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service4} alt="задержаны два нарушителя"/>
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service5} alt="задеражан один нарушитель"/>
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service6} alt="два бегущих сотрудника и машина"/>
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service7} alt="сотрудник с автоматом"/>
          </div>
          <div className="vehicle-item">
            <OptimizedImage  src={service8} alt="сотрудник с пистолетом"/>
          </div>
           <div className="vehicle-item">
            <OptimizedImage  src={service9} alt="сотрудник с пистолетом"/>
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
            <OptimizedImage src={car1} alt="автопарк вид с переди" />
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage src={car2} alt="автопарк вид с боку"/>
            
          </div>
          <div className="vehicle-item">
            <OptimizedImage src={car3} alt="автопарк вид с переди с водителем" />
           
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={car4} alt="машины на дороге" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={car5} alt="машина с боку" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={car6} alt="машина москич Росгвардии" loading="lazy" effect="blur" width="100%"
    height="auto"/>
           
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
      <h3 className="task-h3">Силовые тренировки</h3>
      <p> Тренажёрный зал с профессиональным оборудованием</p>
    </div>
    <h3 className="task-h3">Огневая и тактическая подготовка</h3>
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
            <LazyLoadImage src={sport1} alt="сотрудники на огневом рубеже" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={sport2} alt="сотрудник с оружием" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={sport3} alt="тренажорный зал" loading="lazy" effect="blur" width="100%"
    height="auto"/>
           
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={sport4} alt="сотрудник с стыкножм" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={sport5} alt="сотрудник сдает кровь" loading="lazy" effect="blur" width="100%"
    height="auto"/>
            
          </div>
          <div className="vehicle-item">
            <LazyLoadImage src={sport6} alt="волебол" loading="lazy" effect="blur" width="100%"
    height="auto"/>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;