import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import orelIcon from "./orel.png";
import { Helmet } from "react-helmet";

import "./Header.css";

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
          const button = document.querySelector(".about-button");
          if (button) {
            button.classList.add("animate");

            // Удаляем класс после завершения анимации (0.5s * 3 = 1.5s)
            setTimeout(() => {
              button.classList.remove("animate");
            }, 1500);
          }
        }, 1000);
      }, 200); // Задержка для определения конца скролла
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollEndTimer.current);
      clearTimeout(animationTimer.current);
    };
  }, []);

  return (
    <div className="about-page">
      {/* SEO-метаданные */}
      <Helmet>
        <title>
          Работа в Росгвардии Москва - Вакансии в неведомственной охране
        </title>
        <meta
          name="description"
          content="Федеральная служба войск национальной гвардии РФ приглашает на службу в Москве. Открытые вакансии: полицейские, водители в неведомственной охране. Официальное трудоустройство, соцпакет."
        />
        <meta
          name="keywords"
          content="работа росгвардия, вакансии москва, неведомственная охрана, служба внг рф, полицейский вакансии, водитель росгвардия, 
    работа Северо-Запад Москвы, работа СЗАО, работа рядом с метро Тушино, работа рядом с МЦД Тушино, 
    работа в МОВО по СЗАО, ФГКУ УВО ВНГ России по Москве, вакансии внг в Тушино, 
    работа рядом с метро, служба в росгвардии СЗАО"
        />
      </Helmet>
      <header className="header">
        {/* Добавляем иконку орла по центру */}
        <div className="header-icon-container">
          <img src={orelIcon} alt="Герб" className="header-icon" />
        </div>
        <button
          className="about-button"
          onClick={() => navigate("/about")}
          aria-label="Подробно о нашей работе"
        >
          <FaInfoCircle />
          <span>О нас подробней</span>
        </button>

        <h1>федеральная Служба Войск национальной гвардии РФ</h1>
        <p className="header-p1">
          приглашает на работу
          <br /> в городе Москве:
        </p>
        <p className="header-p2">полицейских, полицейских (водителей)</p>
      </header>
    </div>
  );
}
