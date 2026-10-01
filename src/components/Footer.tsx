import React from 'react';
import { Phone, Mail, Globe, Sparkles, Heart } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img src="/images/logo.png" alt="Royal Wash" className="footer-logo-img" />
              <div>
                <span className="footer-brand-title">ROYAL WASH</span>
                <span className="footer-brand-tagline">VIVE FELIZ, VIVE LIMPIO</span>
              </div>
            </div>

            <p className="footer-about-text">
              Empresa líder en servicios integrales de limpieza, desinfección profunda y mantenimiento
              especializado en Bolivia. Cuidamos cada espacio con dedicación y tecnología industrial.
            </p>

            <div className="footer-contact-items">
              <a href="https://wa.me/59174933733" target="_blank" rel="noopener noreferrer">
                <Phone size={16} className="f-icon" />
                <span>+591 74933733 / 3-3211884</span>
              </a>
              <a href="mailto:contacto@royalwash.app">
                <Mail size={16} className="f-icon" />
                <span>contacto@royalwash.app</span>
              </a>
              <a href="https://www.royalwash.app" target="_blank" rel="noopener noreferrer">
                <Globe size={16} className="f-icon" />
                <span>www.royalwash.app</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-col">
            <h4 className="footer-heading">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Quiénes Somos</a></li>
              <li><a href="#por-que-nosotros">¿Por qué Elegirnos?</a></li>
              <li><a href="#servicios">Servicios de Limpieza</a></li>
              <li><a href="#equipamiento">Equipamiento Industrial</a></li>
              <li><a href="#contacto">Contacto & Cotización</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Servicios Principales</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Limpieza Corporativa</a></li>
              <li><a href="#servicios">Limpieza Domiciliaria Profesional</a></li>
              <li><a href="#servicios">Lavado de Sofás y Muebles</a></li>
              <li><a href="#servicios">Lavado de Alfombras</a></li>
              <li><a href="#servicios">Limpieza Post-Construcción</a></li>
              <li><a href="#servicios">Limpieza de Vidrios en Altura</a></li>
            </ul>
          </div>

          {/* Values / Guarantee */}
          <div className="footer-col">
            <h4 className="footer-heading">Garantía Royal Wash</h4>
            <p className="footer-guarantee-text">
              Nuestros procesos están diseñados para garantizar higiene profunda, conservación de sus muebles
              y tranquilidad absoluta.
            </p>
            <div className="footer-badge-box">
              <Sparkles size={20} color="#D4AF37" />
              <span>Personal 100% de confianza & Supervisión activa</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Royal Wash. Todos los derechos reservados. Santa Cruz, Bolivia.</p>
          <p className="footer-credits">
            Diseñado con <Heart size={14} className="heart-icon" /> para Royal Wash
          </p>
        </div>
      </div>
    </footer>
  );
};
