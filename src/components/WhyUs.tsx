import React from 'react';
import { UserCheck, Sparkles, SearchCheck, ClipboardCheck, CalendarClock, ShieldCheck } from 'lucide-react';
import './WhyUs.css';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: <UserCheck size={32} className="why-icon" />,
      title: 'Personal Capacitado y de Confianza',
      description:
        'Personal seleccionado con riguroso filtro de antecedentes, uniformado e instruido en técnicas avanzadas de desinfección y cortesía profesional.',
      highlight: '100% de confianza',
    },
    {
      icon: <Sparkles size={32} className="why-icon" />,
      title: 'Productos y Equipos Profesionales',
      description:
        'Maquinaria industrial de última tecnología (inyección-extracción profunda, pulidoras y aspiradoras de alto rendimiento) y químicos biodegradables certificados.',
      highlight: 'Grado comercial',
    },
    {
      icon: <SearchCheck size={32} className="why-icon" />,
      title: 'Limpieza Profunda y Detallada',
      description:
        'No nos quedamos en lo visible. Llegamos a rincones difíciles, zócalos y fibras textiles para eliminar polvo invisible, manchas, ácaros y gérmenes.',
      highlight: '99.9% higienizado',
    },
    {
      icon: <ClipboardCheck size={32} className="why-icon" />,
      title: 'Supervisión Constante de Calidad',
      description:
        'Cada servicio es auditado por supervisores dedicados bajo estrictas listas de chequeo antes de la conformidad del cliente.',
      highlight: 'Estándar 5 estrellas',
    },
    {
      icon: <CalendarClock size={32} className="why-icon" />,
      title: 'Flexibilidad de Horarios y Planes',
      description:
        'Diseñamos esquemas a la medida de su empresa u hogar: jornadas diarias, semanales, quincenales o mensuales en turnos que no interrumpan su rutina.',
      highlight: 'A su medida',
    },
  ];

  return (
    <section id="por-que-nosotros" className="why-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <ShieldCheck size={16} />
            <span>VENTAJAS COMPETITIVAS</span>
          </div>
          <h2 className="section-title">
            ¿Por Qué Elegir <span className="gold-gradient-text">Royal Wash</span>?
          </h2>
          <p className="section-subtitle">
            Garantizamos la máxima tranquilidad para su familia y empresa a través de un servicio
            meticuloso, transparente y respaldado por estándares de excelencia.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, index) => (
            <div key={index} className={`royal-card why-card ${index === 0 ? 'why-card-featured' : ''}`}>
              <div className="why-card-top">
                <div className="why-icon-wrapper">{item.icon}</div>
                <span className="why-highlight-badge">{item.highlight}</span>
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
              <div className="why-card-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
