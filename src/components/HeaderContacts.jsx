import React from 'react';
import './HeaderContacts.css';

function HeaderContacts() {
  return (
    <div className="header-contacts">
      <a 
        className="contact-link phone-link" 
        href="tel:+79250571946"
      >
        Телефон: +7 925 057-19-46
      </a>
      <a 
        className="contact-link telegram-link" 
        href="https://t.me/Aleksandr_Saprykin" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Telegram: @Aleksandr_Saprykin
      </a>
      <a 
        className="contact-link email-link" 
        href="mailto:hr@company.com"
      >
        Email: hr@company.com
      </a>
    </div>
  );
}

export default HeaderContacts;