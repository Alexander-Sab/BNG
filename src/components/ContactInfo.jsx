import React from 'react';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <section className="section-contactInfo contacts-list">
      <h2 className="ogl-h2">Контакты</h2>
      <ul>
        <li className="cont-li">Телефон: <a className="cont-a" href="tel:+79250571946">+7 925 057-19-46</a></li>
        <li className="cont-li">Telegram: <a className="cont-a" href="https://t.me/s/Aleksandr_Saprykin">Aleksandr_Saprykin</a></li>
        <li className="cont-li">Email: <a className="cont-a" href="mailto:hr@company.com">hr@company.com</a></li>
      </ul>
    </section>
  );
}