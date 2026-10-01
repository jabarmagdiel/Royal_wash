import React from 'react';
import { Wrench, Shield, CheckCircle2, Cpu, Wind, Droplets } from 'lucide-react';
import './Equipment.css';

export const Equipment: React.FC = () => {
  const equipmentList = [
    {
      title: 'Carritos de Limpieza Profesional',
      subtitle: 'Ergonomía & Prevención de Contaminación Cruzada',
      desc: 'Sistemas modulares con compartimento separado para agua limpia y residual, prensas dosificadoras y microfibras codificadas por colores según áreas críticas.',
      icon: <Cpu size={22} />,
    },
    {
      title: 'Equipos de Inyección y Extracción',
      subtitle: 'Lavado Profundo de Tapicerías & Alfombras',
      desc: 'Presión hidrostática calibrada que inyecta químicos desincrustantes y extrae el 95% de la humedad al instante, evitando olores a humedad y moho interno.',
      icon: <Droplets size={22} />,
    },
    {
      title: 'Pulidoras y Lustradoras Industriales',
      subtitle: 'Abrillantado & Tratamiento de Pisos Nobles',
      desc: 'Rotativas de alta velocidad con discos de diamante y pads de microfibra para decapado, cristalizado y pulido espejo en mármol, porcelanato y madera.',
      icon: <Wind size={22} />,
    },
    {
      title: 'Aspiradoras Industriales Polvo & Líquidos',
      subtitle: 'Alta Capacidad de Succión con Filtración HEPA',
      desc: 'Turbinas de alto caudal con microfiltros HEPA que atrapan el polvillo fino de obra, ácaros y derrames líquidos sin recircular alérgenos al ambiente.',
      icon: <Wrench size={22} />,
    },
  ];

  return (
    <section id="equipamiento" className="equipment-dark-section">
      <div className="container">
        <div className="equipment-top-header">
          <div>
            <div className="badge-tag-dark">
              <Wrench size={15} />
              <span>TECNOLOGÍA PROFESIONAL</span>
            </div>
            <h2 className="title-dark">
              Maquinaria & <span className="gold-gradient-text">Equipamiento Industrial</span>
            </h2>
            <p className="subtitle-dark">
              En <strong>Royal Wash</strong> invertimos en maquinaria de estándar hotelero e industrial. 
              La tecnología correcta reduce tiempos, cuida las superficies delicadas y logra acabados insuperables.
            </p>
          </div>

          <div className="equipment-cert-badge">
            <Shield size={34} className="cert-shield-icon" />
            <div>
              <p className="cert-badge-title">Tecnología Certificada</p>
              <p className="cert-badge-sub">
                Mantenimiento y calibración periódica para máximo rendimiento y seguridad en sus instalaciones.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Showcase Banner */}
        <div className="equipment-main-banner">
          <img
            src="/images/equipment.jpg"
            alt="Línea de maquinaria industrial y carritos profesionales de Royal Wash"
            className="equipment-banner-image"
          />
          <div className="equipment-banner-scrim">
            <span className="banner-small-tag">PARQUE DE MAQUINARIA ROYAL WASH</span>
            <h3 className="banner-large-title">Potencia, precisión y bioseguridad en cada intervención</h3>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="equipment-grid-cards">
          {equipmentList.map((item, index) => (
            <div key={index} className="equip-tech-card">
              <div className="equip-card-top-row">
                <div className="equip-icon-box">{item.icon}</div>
                <span className="equip-digit">0{index + 1}</span>
              </div>
              <h4 className="equip-title">{item.title}</h4>
              <span className="equip-subtitle">{item.subtitle}</span>
              <p className="equip-desc">{item.desc}</p>
              <div className="equip-footer-status">
                <CheckCircle2 size={15} color="#D4AF37" />
                <span>Rendimiento industrial comprobado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
