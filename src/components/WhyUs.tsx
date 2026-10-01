import React from 'react';
import { UserCheck, Sparkles, SearchCheck, ClipboardCheck, CalendarClock, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <UserCheck size={28} />,
      title: 'Personal Capacitado y de Confianza',
      description:
        'Personal rigurosamente seleccionado con verificación de antecedentes, presentación impecable y continua capacitación en técnicas de desinfección.',
      highlight: '100% Verificado',
      badgeColor: 'gold',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Equipos y Químicos Profesionales',
      description:
        'Maquinaria industrial de última generación (extracción profunda, rotativas para abrillantado) y químicos biodegradables certificados que no dañan las fibras.',
      highlight: 'Grado Industrial',
      badgeColor: 'blue',
    },
    {
      icon: <SearchCheck size={28} />,
      title: 'Limpieza Profunda y Detallada',
      description:
        'No nos limitamos a lo superficial. Tratamos zócalos, ranuras, esquinas y microfibras eliminando hasta el 99.9% de gérmenes, ácaros y alérgenos.',
      highlight: '99.9% Desinfección',
      badgeColor: 'emerald',
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: 'Supervisión Constante de Calidad',
      description:
        'Cada servicio cuenta con un líder o supervisor que audita una estricta lista de chequeo antes de solicitar la conformidad del cliente.',
      highlight: 'Control 5 Estrellas',
      badgeColor: 'gold',
    },
    {
      icon: <CalendarClock size={28} />,
      title: 'Flexibilidad de Horarios y Planes',
      description:
        'Diseñamos soluciones que se adaptan a su ritmo: jornadas diarias, semanales, quincenales o mensuales en turnos diurnos o nocturnos sin interrumpir su actividad.',
      highlight: 'Planes a Medida',
      badgeColor: 'blue',
    },
  ];

  return (
    <section id="por-que-nosotros" className="why-section">
      <div className="container">
        <div className="section-header-dark">
          <div className="badge-tag-dark">
            <ShieldCheck size={15} />
            <span>VENTAJAS COMPETITIVAS</span>
          </div>
          <h2 className="title-dark">
            ¿Por Qué Elegir <span className="gold-gradient-text">Royal Wash</span>?
          </h2>
          <p className="subtitle-dark">
            Garantizamos tranquilidad y espacios impecables con procesos certificados, 
            maquinaria de última generación y un equipo humano de total confianza.
          </p>
        </div>

        <div className="why-cards-grid">
          {reasons.map((item, index) => (
            <div key={index} className={`why-dark-card ${index === 0 ? 'why-card-lead' : ''}`}>
              <div className="why-header-row">
                <div className={`why-icon-bubble bubble-${item.badgeColor}`}>
                  {item.icon}
                </div>
                <span className={`why-tag-pill tag-${item.badgeColor}`}>
                  {item.highlight}
                </span>
              </div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
