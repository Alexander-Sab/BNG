import { useNavigate } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className="about-page">
      <header className="header">
        {/* Кнопка теперь внутри .header но позиционируется абсолютно */}
        <button 
          className="about-button"
          onClick={() => navigate('/about')}
          aria-label="Подробно о нашей работе"
        >
          <FaInfoCircle />
          <span>О нас подробней</span>
        </button>

        <h1>Федеральная Служба ВНГ РФ</h1>
        <p className="header-p1">приглашает на работу<br /> в городе Москве:</p>
        <p className="header-p2">полицейских, полицейских (водителей)</p>
      </header>
    </div>
  );
}