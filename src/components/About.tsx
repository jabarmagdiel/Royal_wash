import React from 'react';
import { Target, Compass, Award, Shield, CheckCircle, Sparkles } from 'lucide-react';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <div className="about-layout-grid">
          {/* Left Column: Visual Card with Stat Overlays */}
          <div className="about-image-column">
            <div className="about-card-frame">
              <img
                src="/images/about.jpg"
                alt="Equipo calificado y uniformado de Royal Wash"
                className="about-primary-img"
              />
              
              {/* Floating Quality Tag */}
              <div className="about-floating-stamp">
                <Sparkles size={20} className="stamp-icon" />
                <div>
                  <span className="stamp-title">Estándar 5 Estrellas</span>
                  <span className="stamp-desc">Supervisión en cada servicio</span>
                </div>
              </div>

              {/* Bottom Stat Card */}
              <div className="about-glass-stats">
                <div className="stat-unit">
                  <span className="stat-num">100%</span>
                  <span className="stat-text">Personal Verificado & Asegurado</span>
                </div>
                <div className="stat-sep"></div>
                <div className="stat-unit">
                  <span className="stat-num">+9</span>
                  <span className="stat-text">Servicios Especializados</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="about-text-column">
            <div className="about-pill-badge">
              <Award size={15} />
              <span>QUIÉNES SOMOS</span>
            </div>

            <h2 className="about-main-title">
              Pasión por la Higiene, <br />
              <span className="gold-text-accent">Compromiso con su Tranquilidad</span>
            </h2>

            <p className="about-lead-paragraph">
              En <strong>Royal Wash</strong> nos dedicamos a transformar espacios para que familias 
              y equipos de trabajo convivan en entornos verdaderamente higiénicos, saludables y visualmente impecables.
            </p>

            <p className="about-secondary-paragraph">
              Entendemos que la limpieza no es un simple gasto, sino una inversión fundamental en salud,
              imagen corporativa y productividad. Combinamos personal altamente instruido con maquinaria 
              de inyección-extracción y químicos biodegradables certificados que cuidan sus activos más valiosos.
            </p>

            {/* Mission & Vision in Clean White Cards with Gold Trim */}
            <div className="mv-cards-wrapper">
              <div className="mv-light-card">
                <div className="mv-icon-badge">
                  <Target size={22} />
                </div>
                <div className="mv-text-body">
                  <h3 className="mv-heading">Nuestra Misión</h3>
                  <p className="mv-detail">
                    Brindar soluciones de limpieza y desinfección de la más alta calidad, superando 
                    las expectativas de nuestros clientes corporativos y residenciales con procesos estandarizados.
                  </p>
                </div>
              </div>

              <div className="mv-light-card">
                <div className="mv-icon-badge">
                  <Compass size={22} />
                </div>
                <div className="mv-text-body">
                  <h3 className="mv-heading">Nuestra Visión</h3>
                  <p className="mv-detail">
                    Ser la empresa referente y de máxima confianza en Bolivia en limpieza integral, 
                    reconocida por su puntualidad, ética, acabados de primera y satisfacción garantizada.
                  </p>
                </div>
              </div>
            </div>

            {/* Checkmark List */}
            <div className="about-benefits-row">
              <div className="benefit-pill">
                <CheckCircle size={16} className="benefit-icon" />
                <span>Protocolos de bioseguridad</span>
              </div>
              <div className="benefit-pill">
                <CheckCircle size={16} className="benefit-icon" />
                <span>Planes a medida y flexibles</span>
              </div>
              <div className="benefit-pill">
                <Shield size={16} className="benefit-icon" />
                <span>Supervisión activa en sitio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
