import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          {/* Visual Side */}
          <div className="about-visual">
            <div className="about-image-card">
              <img
                src="/images/about.jpg"
                alt="Equipo profesional uniformado de Royal Wash"
                className="about-img"
              />
              <div className="about-stats-banner">
                <div className="stat-box">
                  <span className="stat-number gold-gradient-text">100%</span>
                  <span className="stat-label">Personal Verificado & Confiable</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-box">
                  <span className="stat-number gold-gradient-text">5★</span>
                  <span className="stat-label">Estándar de Calidad Premium</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="about-content">
            <div className="badge-tag">
              <Award size={16} />
              <span>QUIÉNES SOMOS</span>
            </div>

            <h2 className="section-title">
              Pasión por la Limpieza, <br />
              <span className="gold-gradient-text">Compromiso con su Bienestar</span>
            </h2>

            <p className="about-lead">
              En <strong>Royal Wash</strong> nos dedicamos a transformar espacios para que personas y empresas
              vivan y trabajen en ambientes higiénicos, saludables y visualmente impecables.
            </p>

            <p className="about-paragraph">
              Entendemos que la limpieza no es un simple gasto, sino una inversión fundamental en salud,
              imagen corporativa y productividad. Por eso, combinamos técnicos altamente capacitados,
              maquinaria especializada y productos ecológicos que garantizan resultados de alto impacto.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mission-vision-cards">
              <div className="royal-card mv-card">
                <div className="mv-icon-box">
                  <Target size={24} className="gold-icon" />
                </div>
                <div>
                  <h3 className="mv-title">Nuestra Misión</h3>
                  <p className="mv-desc">
                    Brindar servicios de limpieza y desinfección de la más alta calidad, superando las
                    expectativas de nuestros clientes corporativos y residenciales con procesos
                    estandarizados y tecnología de vanguardia.
                  </p>
                </div>
              </div>

              <div className="royal-card mv-card">
                <div className="mv-icon-box">
                  <Compass size={24} className="gold-icon" />
                </div>
                <div>
                  <h3 className="mv-title">Nuestra Visión</h3>
                  <p className="mv-desc">
                    Ser la empresa referente y de máxima confianza en el rubro de la limpieza integral,
                    reconocida por su puntualidad, ética, excelencia operativa y la satisfacción plena de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick checkmarks */}
            <div className="about-checks">
              <div className="about-check-item">
                <CheckCircle size={18} color="#D4AF37" />
                <span>Protocolos rigurosos de bioseguridad</span>
              </div>
              <div className="about-check-item">
                <CheckCircle size={18} color="#D4AF37" />
                <span>Atención personalizada y flexible</span>
              </div>
              <div className="about-check-item">
                <Shield size={18} color="#D4AF37" />
                <span>Seguro y supervisión activa en sitio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
