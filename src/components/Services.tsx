import React, { useState } from 'react';
import { 
  Building2, Home, Armchair, Sparkles, Hammer, 
  Car, Bed, CloudSun, Footprints, MessageSquare, ArrowUpRight, Check
} from 'lucide-react';
import './Services.css';

interface ServiceItem {
  id: string;
  category: 'corporativo' | 'hogar' | 'tapiceria' | 'vehiculos';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
  tag: string;
  tagColor: 'navy' | 'gold' | 'emerald' | 'blue';
}

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const servicesData: ServiceItem[] = [
    {
      id: 'corporativa',
      category: 'corporativo',
      title: 'Limpieza Corporativa',
      subtitle: 'Oficinas, Empresas & Edificios Comerciales',
      description:
        'Mantenimiento integral adaptado a sus horarios laborales. Ambientes impecables que proyectan solvencia y protegen la salud de sus colaboradores.',
      image: '/images/service-corporativa.jpg',
      icon: <Building2 size={22} />,
      tag: 'Empresarial',
      tagColor: 'navy',
      features: [
        'Desinfección de escritorios, salas y áreas comunes',
        'Mantenimiento de baterías sanitarias e insumos',
        'Supervisión y control diario, semanal o mensual',
      ],
    },
    {
      id: 'domiciliaria',
      category: 'hogar',
      title: 'Limpieza Domiciliaria Profesional',
      subtitle: 'Residencias, Casas & Departamentos',
      description:
        'Cuidado minucioso de su hogar. Aplicamos productos protectores en maderas, mármoles y griferías, garantizando ambientes desinfectados y perfumados.',
      image: '/images/service-domiciliaria.jpg',
      icon: <Home size={22} />,
      tag: 'Hogar',
      tagColor: 'emerald',
      features: [
        'Desengrase profundo de cocinas y campanas',
        'Desinfección de azulejos y artefactos de baño',
        'Personal verificado de absoluta confianza',
      ],
    },
    {
      id: 'sofas',
      category: 'tapiceria',
      title: 'Limpieza de Sofás y Muebles',
      subtitle: 'Tapicerías, Sillones & Sillas Ejecutivas',
      description:
        'Inyección y extracción profunda que penetra en la espuma, removiendo manchas rebeldes de café, derrames, sudoración y ácaros sin alterar el tejido.',
      image: '/images/service-sofas.jpg',
      icon: <Armchair size={22} />,
      tag: 'Tapicería',
      tagColor: 'gold',
      features: [
        'Extracción profunda de suciedad y alérgenos',
        'Secado rápido con equipo de succión industrial',
        'Productos neutros seguros para mascotas y niños',
      ],
    },
    {
      id: 'alfombras',
      category: 'tapiceria',
      title: 'Lavado de Alfombras',
      subtitle: 'Alfombras Fijas, Modulares & Tapetes Finos',
      description:
        'Tratamiento intensivo con químicos desincrustantes y cepillado que devuelven el brillo, textura esponjosa y viveza cromática original a sus alfombras.',
      image: '/images/service-alfombras.jpg',
      icon: <Sparkles size={22} />,
      tag: 'Fibras Nobles',
      tagColor: 'gold',
      features: [
        'Remoción de manchas incrustadas y polvo profundo',
        'Tratamiento anti-ácaros y neutralizador de olores',
        'Servicio a domicilio sin necesidad de traslados',
      ],
    },
    {
      id: 'postconstruccion',
      category: 'corporativo',
      title: 'Limpieza Post-Construcción',
      subtitle: 'Obras Nuevas, Reformas & Remodelaciones',
      description:
        'Eliminamos los residuos más complejos: polvillo de yeso fino, restos de cemento, pintura en vidrios y siliconas, dejando su inmueble listo para entrega o mudanza.',
      image: '/images/service-postconstruccion.jpg',
      icon: <Hammer size={22} />,
      tag: 'Obras & Mudanzas',
      tagColor: 'navy',
      features: [
        'Remoción técnica de pintura en marcos y cristales',
        'Aspirado industrial de polvo microscópico',
        'Lavado y abrillantado de pisos para entrega inmediata',
      ],
    },
    {
      id: 'vehiculos',
      category: 'vehiculos',
      title: 'Lavado de Vehículos a Detalle',
      subtitle: 'Auto Detailing Interior & Exterior',
      description:
        'Cuidado automotriz de nivel superior. Lavado de carrocería con cera de alto brillo, descontaminación, y limpieza por extracción de asientos, techos y alfombras.',
      image: '/images/service-vehiculos.jpg',
      icon: <Car size={22} />,
      tag: 'Auto Detailing',
      tagColor: 'blue',
      features: [
        'Desmanchado e higienización de tapicerías',
        'Limpieza de ductos de aire acondicionado',
        'Protección de pintura contra rayos UV',
      ],
    },
    {
      id: 'colchones',
      category: 'hogar',
      title: 'Lavado y Sanitización de Colchón',
      subtitle: 'Higiene Profunda para un Descanso Saludable',
      description:
        'El colchón acumula miles de ácaros, piel muerta y bacterias. Nuestro tratamiento con vapor y extracción elimina el 99.9% de agentes alérgenos.',
      image: '/images/service-colchon.jpg',
      icon: <Bed size={22} />,
      tag: 'Salud & Descanso',
      tagColor: 'emerald',
      features: [
        'Eliminación de manchas orgánicas y sudoración',
        'Desinfección hipoalergénica sin químicos agresivos',
        'Recomendado para personas con alergias y asma',
      ],
    },
    {
      id: 'vidrios',
      category: 'corporativo',
      title: 'Limpieza de Vidrios en Altura',
      subtitle: 'Fachadas, Muros Cortina & Ventanales',
      description:
        'Personal especializado y certificado con equipos de seguridad de descenso vertical para edificios y condominios. Vidrios cristalinos bajo normativas estrictas.',
      image: '/images/service-vidrios.jpg',
      icon: <CloudSun size={22} />,
      tag: 'Trabajo en Altura',
      tagColor: 'navy',
      features: [
        'Operarios certificados para trabajo en alturas',
        'Agua desmineralizada y escobillas de precisión',
        'Tratamiento antiadherente contra lluvia y polvillo',
      ],
    },
    {
      id: 'zapatillas',
      category: 'vehiculos',
      title: 'Lavado de Zapatillas de Tenis',
      subtitle: 'Sneakers Urbanos, Deportivos & Alta Gama',
      description:
        'Tratamiento artesanal y dedicado para revivir su calzado favorito. Lavado detallado de suelas, capelladas de cuero, gamuza o lona y desinfección antibacteriana.',
      image: '/images/service-zapatillas.jpg',
      icon: <Footprints size={22} />,
      tag: 'Cuidado Calzado',
      tagColor: 'blue',
      features: [
        'Cepillado delicado según tipo de material',
        'Blanqueamiento de mediasuelas y protección de tonos',
        'Desodorización y eliminación de bacterias en plantillas',
      ],
    },
  ];

  const filteredServices =
    activeFilter === 'todos'
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <section id="servicios" className="services-light-section">
      <div className="container">
        {/* Section Header (Light Mode) */}
        <div className="section-header-light">
          <div className="badge-tag-light">
            <Sparkles size={15} />
            <span>PORTAFOLIO DE SERVICIOS</span>
          </div>
          <h2 className="title-light">
            Soluciones Integrales de <span className="gold-text-accent">Limpieza Especializada</span>
          </h2>
          <p className="subtitle-light">
            Selecciona el servicio que necesitas para tu empresa o residencia. Utilizamos maquinaria 
            industrial y químicos certificados para resultados 100% garantizados.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="services-segmented-tabs">
          <button
            className={`tab-pill ${activeFilter === 'todos' ? 'tab-active' : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos (9)
          </button>
          <button
            className={`tab-pill ${activeFilter === 'corporativo' ? 'tab-active' : ''}`}
            onClick={() => setActiveFilter('corporativo')}
          >
            Corporativo & Oficinas
          </button>
          <button
            className={`tab-pill ${activeFilter === 'hogar' ? 'tab-active' : ''}`}
            onClick={() => setActiveFilter('hogar')}
          >
            Hogar & Residencias
          </button>
          <button
            className={`tab-pill ${activeFilter === 'tapiceria' ? 'tab-active' : ''}`}
            onClick={() => setActiveFilter('tapiceria')}
          >
            Sofás & Alfombras
          </button>
          <button
            className={`tab-pill ${activeFilter === 'vehiculos' ? 'tab-active' : ''}`}
            onClick={() => setActiveFilter('vehiculos')}
          >
            Autos & Calzado
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="services-cards-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-white-card">
              {/* Image & Category Pill */}
              <div className="service-photo-wrap">
                <img
                  src={service.image}
                  alt={`Servicio de ${service.title} - Royal Wash`}
                  className="service-photo"
                  loading="lazy"
                />
                <div className="service-photo-gradient"></div>
                <span className={`service-tag-badge badge-${service.tagColor}`}>
                  {service.tag}
                </span>
                <div className="service-icon-circle">{service.icon}</div>
              </div>

              {/* Card Body */}
              <div className="service-body">
                <span className="service-subtitle-text">{service.subtitle}</span>
                <h3 className="service-title-text">{service.title}</h3>
                <p className="service-description-text">{service.description}</p>

                {/* Features list */}
                <div className="service-checks-box">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-check-item">
                      <div className="check-bullet">
                        <Check size={14} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="service-card-bottom">
                  <a
                    href={`https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20deseo%20cotizar%20el%20servicio%20de%20*${encodeURIComponent(
                      service.title
                    )}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-quote-action"
                  >
                    <span>Cotizar este servicio</span>
                    <div className="quote-arrow-wrap">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Navy & Gold Custom Plan Banner */}
        <div className="services-custom-banner">
          <div className="banner-info">
            <span className="banner-tag">ATENCIÓN A MEDIDA</span>
            <h3 className="banner-heading">¿Requieres un paquete corporativo o mantenimiento continuo?</h3>
            <p className="banner-desc">
              Diseñamos propuestas comerciales según los metros cuadrados, la frecuencia de intervención 
              y las particularidades de tu empresa o domicilio.
            </p>
          </div>
          <a
            href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20necesito%20un%20plan%20corporativo%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp banner-cta-btn"
          >
            <MessageSquare size={19} />
            <span>Hablar con un Asesor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
