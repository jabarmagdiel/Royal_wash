import React from 'react';
import { MessageSquareCheck, CalendarCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import './Process.css';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Cotización en Minutos',
      desc: 'Escríbenos por WhatsApp con los detalles de tus ambientes, muebles o m² y recibe una propuesta clara sin sorpresas.',
      icon: <MessageSquareCheck size={26} />,
    },
    {
      num: '02',
      title: 'Coordinación Flexible',
      desc: 'Fijamos el día y turno (diurno o nocturno) que mejor se adapte a tu agenda familiar o ritmo comercial.',
      icon: <CalendarCheck size={26} />,
    },
    {
      num: '03',
      title: 'Limpieza de Grado Industrial',
      desc: 'Llegamos puntuales con equipo de inyección-extracción, pulidoras y personal debidamente identificado.',
      icon: <Sparkles size={26} />,
    },
    {
      num: '04',
      title: 'Control de Calidad 5 Estrellas',
      desc: 'Inspección meticulosa con lista de verificación para asegurar que cada rincón cumpla tu total conformidad.',
      icon: <CheckCircle2 size={26} />,
    },
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header-light">
          <div className="badge-tag-light">
            <span>PROCESO ESTANDARIZADO</span>
          </div>
          <h2 className="title-light">
            ¿Cómo Trabajamos en <span className="gold-text-accent">Royal Wash</span>?
          </h2>
          <p className="subtitle-light">
            Procesos claros, seguros y sin complicaciones desde el primer contacto hasta la entrega impecable.
          </p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step-card">
              <div className="process-top-row">
                <span className="process-num-badge">{step.num}</span>
                <div className="process-icon-wrap">{step.icon}</div>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
              {index < steps.length - 1 && (
                <div className="process-step-connector">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
