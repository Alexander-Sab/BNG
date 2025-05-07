import React from 'react';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <ul>
        <li>Телефон: <a href="tel:+71234567890">+7 123 456-78-90</a></li>
        <li>Telegram: <a href="https://t.me/your_company">@your_company</a></li>
        <li>Email: <a href="mailto:hr@company.com">hr@company.com</a></li>
      </ul>
    </div>
  );
}