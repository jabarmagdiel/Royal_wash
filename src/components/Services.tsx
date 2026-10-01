import React, { useState } from 'react';
import { 
  Building2, Home, Armchair, Sparkles, Hammer, 
  Car, Bed, CloudSun, Footprints, MessageSquare, ArrowUpRight, Check
} from 'lucide-react';
import './Services.css';

interface ServiceItem {
  id: string;
  category: 'corporativo' | 'hogar' | 'especializado' | 'vehiculos';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
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
        'Mantenimiento integral adaptado a sus horarios laborales. Ambientes impecables que potencian el bienestar de sus colaboradores y proyectan una imagen de máxima solvencia hacia sus clientes.',
      image: '/images/service-corporativa.jpg',
      icon: <Building2 size={24} />,
      features: [
        'Desinfección de salas de reuniones y escritorios',
        'Mantenimiento continuo de baños y áreas comunes',
        'Planes diarios, semanales o mensuales con supervisión',
      ],
    },
    {
      id: 'domiciliaria',
      category: 'hogar',
      title: 'Limpieza Domiciliaria Profesional',
      subtitle: 'Residencias, Casas & Departamentos',
      description:
        'Cuidado minucioso de cada rincón de su hogar. Aplicamos productos protectores en maderas, mármoles y griferías, asegurando higiene profunda, ambientes perfumados y orden absoluto.',
      image: '/images/service-domiciliaria.jpg',
      icon: <Home size={24} />,
      features: [
        'Desengrase y sanitización completa de cocinas',
        'Desinfección profunda de azulejos y artefactos sanitarios',
        'Personal verificado de absoluta confianza',
      ],
    },
    {
      id: 'sofas',
      category: 'especializado',
      title: 'Limpieza de Sofás y Muebles',
      subtitle: 'Tapicerías, Sillones, Poltronas & Sillas',
      description:
        'Sistema de inyección y extracción profunda que penetra en el núcleo del tejido, removiendo manchas de café, sudor, derrames, ácaros y olores de mascotas sin maltratar la textura.',
      image: '/images/service-sofas.jpg',
      icon: <Armchair size={24} />,
      features: [
        'Extracción profunda de suciedad y alérgenos',
        'Secado rápido con equipo de succión industrial',
        'Productos neutros seguros para niños y mascotas',
      ],
    },
    {
      id: 'alfombras',
      category: 'especializado',
      title: 'Lavado de Alfombras',
      subtitle: 'Alfombras Fijas, Modulares & Tapetes Decorativos',
      description:
        'Tratamiento intensivo con químicos de acción desincrustante y cepillado controlado que devuelven el brillo, la textura esponjosa y la viveza cromática original a sus alfombras.',
      image: '/images/service-alfombras.jpg',
      icon: <Sparkles size={24} />,
      features: [
        'Remoción de tierra incrustada y manchas difíciles',
        'Tratamiento anti-ácaros y neutralizador de olores',
        'Servicio a domicilio sin necesidad de retirar la alfombra',
      ],
    },
    {
      id: 'postconstruccion',
      category: 'corporativo',
      title: 'Limpieza Post-Construcción',
      subtitle: 'Obras Nuevas, Reformas & Remodelaciones',
      description:
        'Eliminamos los residuos más complejos de la construcción: polvo de yeso fino, restos de cemento, pintura en vidrios y siliconas, dejando su inmueble listo para entrega o mudanza.',
      image: '/images/service-postconstruccion.jpg',
      icon: <Hammer size={24} />,
      features: [
        'Remoción de pintura y adhesivos en marcos y vidrios',
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
        'Cuidado automotriz de nivel superior. Lavado minucioso de carrocería con cera de alto brillo, descontaminado, y limpieza profunda por extracción de asientos, techos, paneles y alfombras.',
      image: '/images/service-vehiculos.jpg',
      icon: <Car size={24} />,
      features: [
        'Higienización y desmanchado de tapices interiores',
        'Limpieza de ductos de aire acondicionado y desodorización',
        'Brillo de pintura y protección contra rayos UV',
      ],
    },
    {
      id: 'colchones',
      category: 'hogar',
      title: 'Lavado y Sanitización de Colchones',
      subtitle: 'Higiene Profunda para un Sueño Saludable',
      description:
        'El colchón acumula miles de ácaros, piel muerta y bacterias. Nuestro tratamiento de desinfección profunda con vapor y extracción elimina el 99.9% de agentes alergénicos.',
      image: '/images/service-colchon.jpg',
      icon: <Bed size={24} />,
      features: [
        'Eliminación de manchas orgánicas y sudoración',
        'Desinfección antibacteriana e hipoalergénica',
        'Recomendado para personas con alergias y asma',
      ],
    },
    {
      id: 'vidrios',
      category: 'corporativo',
      title: 'Limpieza de Vidrios en Altura',
      subtitle: 'Fachadas, Muros Cortina & Ventanales',
      description:
        'Personal especializado y certificado con equipos de seguridad de descenso vertical para edificios, condominios y comercios. Vidrios cristalinos sin vetas bajo normativas estrictas.',
      image: '/images/service-vidrios.jpg',
      icon: <CloudSun size={24} />,
      features: [
        'Operarios certificados para trabajo en alturas',
        'Agua desmineralizada y escobillas profesionales',
        'Tratamiento repelente a lluvia y sedimentos de polvo',
      ],
    },
    {
      id: 'zapatillas',
      category: 'vehiculos',
      title: 'Lavado y Cuidado de Zapatillas',
      subtitle: 'Sneakers Urbanos, Deportivos & Alta Gama',
      description:
        'Tratamiento artesanal y dedicado para revivir su calzado favorito. Lavado detallado de suelas, capelladas de cuero, gamuza o lona, cordones y desinfección interna antimicrobiana.',
      image: '/images/service-zapatillas.jpg',
      icon: <Footprints size={24} />,
      features: [
        'Cepillado delicado según tipo de material',
        'Blanqueamiento de mediasuelas y protección de colores',
        'Eliminación de olores y bacterias en plantillas',
      ],
    },
  ];

  const filteredServices =
    activeFilter === 'todos'
      ? servicesData
      : servicesData.filter((s) => s.category === activeFilter);

  return (
    <section id="servicios" className="services-section section-padding">
      <div className="container">
        <div className="section-header">
          <div className="badge-tag">
            <Sparkles size={16} />
            <span>PORTAFOLIO DE SERVICIOS</span>
          </div>
          <h2 className="section-title">
            Soluciones Integrales de <span className="gold-gradient-text">Limpieza Especializada</span>
          </h2>
          <p className="section-subtitle">
            Equipamiento de última generación y personal experto para cubrir cada una de sus necesidades
            con los más altos estándares de calidad y pulcritud.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="services-filter-tabs">
          <button
            className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos los Servicios (9)
          </button>
          <button
            className={`filter-btn ${activeFilter === 'corporativo' ? 'active' : ''}`}
            onClick={() => setActiveFilter('corporativo')}
          >
            Corporativo & Empresas
          </button>
          <button
            className={`filter-btn ${activeFilter === 'hogar' ? 'active' : ''}`}
            onClick={() => setActiveFilter('hogar')}
          >
            Hogar & Residencial
          </button>
          <button
            className={`filter-btn ${activeFilter === 'especializado' ? 'active' : ''}`}
            onClick={() => setActiveFilter('especializado')}
          >
            Tapicería & Alfombras
          </button>
          <button
            className={`filter-btn ${activeFilter === 'vehiculos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('vehiculos')}
          >
            Autos & Calzado
          </button>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="royal-card service-card">
              {/* Service Card Image */}
              <div className="service-img-wrap">
                <img
                  src={service.image}
                  alt={`Servicio de ${service.title} - Royal Wash`}
                  className="service-img"
                  loading="lazy"
                />
                <div className="service-img-overlay"></div>
                <div className="service-icon-floating">{service.icon}</div>
              </div>

              {/* Service Card Content */}
              <div className="service-card-body">
                <span className="service-card-subtitle">{service.subtitle}</span>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                {/* Features list */}
                <div className="service-features-list">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature-row">
                      <Check size={16} className="feature-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <div className="service-card-footer">
                  <a
                    href={`https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20deseo%20cotizar%20el%20servicio%20de%20*${encodeURIComponent(
                      service.title
                    )}*`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-cta-link"
                  >
                    <span>Cotizar este servicio</span>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Box inside services */}
        <div className="services-banner-box">
          <div className="banner-text">
            <h3>¿Necesitas un plan personalizado o un paquete corporativo?</h3>
            <p>
              Diseñamos presupuestos a medida según los metros cuadrados, frecuencia y requerimientos
              específicos de tu empresa o domicilio.
            </p>
          </div>
          <a
            href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20necesito%20un%20plan%20personalizado%20para%20mi%20empresa%20u%20hogar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Hablar con un Asesor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
