import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Star, Clock, ThumbsUp } from 'lucide-react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero-section">
      {/* Ambient background light gradients */}
      <div className="hero-glow-gold"></div>
      <div className="hero-glow-blue"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Trust Badge */}
          <div className="hero-badge">
            <span className="badge-sparkle"><Sparkles size={15} /></span>
            <span>EMPRESA DE LIMPIEZA INTEGRAL & ESPECIALIZADA</span>
          </div>

          {/* Luxury Editorial Slogan */}
          <h1 className="hero-title">
            VIVE <span className="serif-italic gold-gradient-text">Feliz,</span> <br />
            VIVE <span className="hero-clean-word">LIMPIO.</span>
          </h1>

          <p className="hero-description">
            En <strong>Royal Wash</strong> transformamos oficinas, residencias y tapicerías con 
            tecnología de extracción profunda, productos ecológicos certificados y un equipo 
            humano calificado y de rigurosa confianza.
          </p>

          {/* Quick value props */}
          <div className="hero-pills-row">
            <div className="hero-pill">
              <CheckCircle2 size={16} className="pill-icon-gold" />
              <span>Personal 100% de confianza</span>
            </div>
            <div className="hero-pill">
              <ShieldCheck size={16} className="pill-icon-gold" />
              <span>Garantía y supervisión</span>
            </div>
            <div className="hero-pill">
              <Award size={16} className="pill-icon-gold" />
              <span>Maquinaria industrial</span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="hero-actions">
            <a
              href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20para%20servicios%20de%20limpieza"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hero-main-btn"
            >
              <MessageCircle size={20} />
              <span>Cotizar por WhatsApp</span>
            </a>
            <a href="#servicios" className="btn-secondary-dark">
              <span>Ver Servicios</span>
              <ArrowRight size={17} />
            </a>
          </div>

          {/* Social Proof Star Rating */}
          <div className="hero-social-proof">
            <div className="star-rating-box">
              <div className="stars-cluster">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                ))}
              </div>
              <span className="rating-score">4.9 / 5.0</span>
            </div>
            <p className="rating-phrase">
              Estándar de calidad <strong>5 Estrellas</strong> para empresas y hogares en Santa Cruz
            </p>
          </div>
        </div>

        {/* Hero Image Showcase */}
        <div className="hero-showcase">
          <div className="hero-frame">
            <img
              src="/images/hero.jpg"
              alt="Personal uniformado de Royal Wash realizando limpieza corporativa y residencial de alta gama"
              className="hero-img"
            />
            <div className="hero-img-gradient"></div>

            {/* Floating Card: Inyección & Extracción */}
            <div className="hero-float-card float-top">
              <div className="float-icon-gold">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="float-card-title">Inyección & Extracción</p>
                <p className="float-card-sub">Secado rápido y desinfección</p>
              </div>
            </div>

            {/* Floating Card: Supervisión Activa */}
            <div className="hero-float-card float-bottom">
              <div className="float-icon-green">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="float-card-title">Supervisión en Sitio</p>
                <p className="float-card-sub">Control de calidad garantizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Trust Metrics Ribbon */}
      <div className="container hero-metrics-wrap">
        <div className="hero-metrics-ribbon">
          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <Award size={22} />
            </div>
            <div>
              <strong className="metric-value">9+</strong>
              <span className="metric-label">Servicios Especializados</span>
            </div>
          </div>
          <div className="metric-cell-divider"></div>

          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <ThumbsUp size={22} />
            </div>
            <div>
              <strong className="metric-value">100%</strong>
              <span className="metric-label">Satisfacción Garantizada</span>
            </div>
          </div>
          <div className="metric-cell-divider"></div>

          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <Clock size={22} />
            </div>
            <div>
              <strong className="metric-value">5 min</strong>
              <span className="metric-label">Respuesta Express WhatsApp</span>
            </div>
          </div>
          <div className="metric-cell-divider"></div>

          <div className="metric-cell">
            <div className="metric-icon-wrap">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong className="metric-value">Personal</strong>
              <span className="metric-label">Capacitado & Verificado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
