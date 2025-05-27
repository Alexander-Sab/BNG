import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollEndTimer = useRef(null);
  const animationTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Очищаем предыдущие таймеры
      clearTimeout(scrollEndTimer.current);
      clearTimeout(animationTimer.current);
      
      // Устанавливаем таймер для определения конца скролла
      scrollEndTimer.current = setTimeout(() => {
        setIsScrolling(false);
        
        // Запускаем анимацию через 1 секунду после остановки скролла
        animationTimer.current = setTimeout(() => {
          // Анимация будет управляться через CSS-класс
          const button = document.querySelector('.about-button');
          if (button) {
            button.classList.add('animate');
            
            // Удаляем класс после завершения анимации (0.5s * 3 = 1.5s)
            setTimeout(() => {
              button.classList.remove('animate');
            }, 1500);
          }
        }, 1000);
      }, 200); // Задержка для определения конца скролла
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollEndTimer.current);
      clearTimeout(animationTimer.current);
    };
  }, []);

  return (
    <div className="about-page">
      <header className="header">
        <button 
          className="about-button"
          onClick={() => navigate('/about')}
          aria-label="Подробно о нашей работе"
        >
          <FaInfoCircle />
          <span>О нас подробней</span>
        </button>

        <h1>Федеральная Служба ВНГ РФ</h1>
        <p className="header-p1">приглашает на работу<br /> в горете Москве:</p>
        <p className="header-p2">полицейских, полицейских (водителей)</p>
      </header>
    </div>
  );
}