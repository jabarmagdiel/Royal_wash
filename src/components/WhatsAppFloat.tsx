import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFloat.css';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20quisiera%20solicitar%20informaci%C3%B3n%20y%20precios%20de%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float-btn"
      aria-label="Hablar por WhatsApp con Royal Wash"
    >
      <div className="whatsapp-pulse"></div>
      <MessageCircle size={28} className="whatsapp-icon-inner" />
      <span className="whatsapp-tooltip">¿En qué podemos ayudarte?</span>
    </a>
  );
};
