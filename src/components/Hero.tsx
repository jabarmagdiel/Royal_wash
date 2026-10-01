import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Star } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      {/* Background ambient lighting effects */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Trust Badge */}
          <div className="badge-tag hero-badge">
            <Sparkles size={16} />
            <span>EXCELENCIA EN HIGIENE INTEGRAL</span>
          </div>

          {/* Slogan & Main Headings */}
          <h1 className="hero-title">
            VIVE FELIZ, <br />
            <span className="gold-gradient-text">VIVE LIMPIO</span>
          </h1>

          <p className="hero-description">
            En <strong>Royal Wash</strong> elevamos el estándar de la limpieza y desinfección profesional. 
            Transformamos oficinas corporativas, residencias y tapicerías con tecnología de 
            extracción profunda, personal de máxima confianza y acabados impecables.
          </p>

          {/* Trust points */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <CheckCircle2 size={18} className="highlight-icon" />
              <span>Personal 100% Calificado</span>
            </div>
            <div className="highlight-item">
              <ShieldCheck size={18} className="highlight-icon" />
              <span>Garantía de Satisfacción</span>
            </div>
            <div className="highlight-item">
              <Award size={18} className="highlight-icon" />
              <span>Equipos de Grado Industrial</span>
            </div>
          </div>

          {/* Actions */}
          <div className="hero-buttons">
            <a
              href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20quisiera%20cotizar%20un%20servicio%20de%20limpieza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} />
              <span>Cotizar por WhatsApp</span>
            </a>
            <a href="#servicios" className="btn-secondary">
              <span>Explorar Servicios</span>
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Review badge */}
          <div className="hero-rating-box">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <p className="rating-text">
              <strong>Servicio 5 Estrellas</strong> recomendado por empresas y hogares exigentes
            </p>
          </div>
        </div>

        {/* Hero Visual Card Showcase */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img
              src="/images/hero.jpg"
              alt="Personal profesional de Royal Wash realizando limpieza corporativa de lujo"
              className="hero-main-img"
            />
            <div className="hero-image-overlay"></div>

            {/* Floating Glass Pill 1 */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-wrap">
                <Sparkles size={20} color="#D4AF37" />
              </div>
              <div>
                <p className="badge-title">Tecnología de Punta</p>
                <p className="badge-subtitle">Inyección & Extracción</p>
              </div>
            </div>

            {/* Floating Glass Pill 2 */}
            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon-wrap">
                <ShieldCheck size={20} color="#25D366" />
              </div>
              <div>
                <p className="badge-title">Supervisión Total</p>
                <p className="badge-subtitle">Control de calidad garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
