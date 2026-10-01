import React from 'react';
import { Wrench, Shield, CheckCircle2, Cpu, Wind, Droplets } from 'lucide-react';
import './Equipment.css';

export const Equipment: React.FC = () => {
  const equipmentList = [
    {
      title: 'Carritos de Limpieza Profesional',
      subtitle: 'Ergonomía & Prevención de Contaminación Cruzada',
      desc: 'Sistemas rodantes con doble compartimento de agua limpia/sucia, prensas dosificadoras y dispensadores seguros de microfibra clasificados por colores según área médica o corporativa.',
      icon: <Cpu size={24} />,
    },
    {
      title: 'Equipos de Inyección y Extracción',
      subtitle: 'Lavado Profundo de Tapicería & Alfombras',
      desc: 'Maquinaria de presión hidrostática controlada que inyecta solución química desincrustante y extrae hasta el 95% de la humedad con potente vacío para desinfección interna sin mojar la base.',
      icon: <Droplets size={24} />,
    },
    {
      title: 'Pulidoras y Lustradoras Industriales',
      subtitle: 'Abrillantado & Tratamiento de Pisos Nobles',
      desc: 'Rotativas de alta velocidad con discos de diamante y fibras sintéticas para decapado, encerado y cristalizado de pisos en mármol, porcelanato, terrazo y maderas finas.',
      icon: <Wind size={24} />,
    },
    {
      title: 'Aspiradoras Industriales Polvo & Líquidos',
      subtitle: 'Alta Capacidad de Succión con Filtración HEPA',
      desc: 'Turbinas de alto rendimiento capaces de succionar polvillo fino de post-construcción, agua estancada y partículas microscópicas, garantizando aire limpio durante la faena.',
      icon: <Wrench size={24} />,
    },
  ];

  return (
    <section id="equipamiento" className="equipment-section section-padding">
      <div className="container">
        <div className="equipment-header-grid">
          <div>
            <div className="badge-tag">
              <Wrench size={16} />
              <span>TECNOLOGÍA PROFESIONAL</span>
            </div>
            <h2 className="section-title">
              Nuestro <span className="gold-gradient-text">Equipamiento</span>
            </h2>
            <p className="equipment-intro">
              En <strong>Royal Wash</strong> invertimos permanentemente en maquinaria y herramientas de clase mundial.
              Utilizar la tecnología correcta no solo optimiza el tiempo, sino que garantiza acabados que ninguna
              limpieza convencional puede alcanzar.
            </p>
          </div>

          <div className="equipment-guarantee-badge">
            <Shield size={32} className="shield-icon" />
            <div>
              <p className="guarantee-title">Tecnología Certificada</p>
              <p className="guarantee-desc">
                Equipos inspeccionados y calibrados periódicamente para máxima eficacia y cuidado de sus superficies.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Big Showcase Image */}
        <div className="equipment-showcase-container">
          <img
            src="/images/equipment.jpg"
            alt="Línea de maquinaria industrial y carritos de limpieza de Royal Wash"
            className="equipment-banner-img"
          />
          <div className="equipment-showcase-overlay">
            <span className="showcase-tag">Gama Industrial Royal Wash</span>
            <h3 className="showcase-heading">Potencia, precisión y bioseguridad en cada intervención</h3>
          </div>
        </div>

        {/* 4 Equipment Categories Grid */}
        <div className="equipment-cards-grid">
          {equipmentList.map((item, index) => (
            <div key={index} className="royal-card equipment-card">
              <div className="equip-top">
                <div className="equip-icon-wrap">{item.icon}</div>
                <span className="equip-num">0{index + 1}</span>
              </div>
              <h4 className="equip-card-title">{item.title}</h4>
              <span className="equip-card-subtitle">{item.subtitle}</span>
              <p className="equip-card-desc">{item.desc}</p>
              <div className="equip-badge-row">
                <CheckCircle2 size={14} color="#D4AF37" />
                <span>Rendimiento industrial comprobado</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
