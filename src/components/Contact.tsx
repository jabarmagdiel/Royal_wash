import React, { useState } from 'react';
import { Phone, PhoneCall, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clientType: 'Empresa',
    service: 'Limpieza Corporativa',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*SOLICITUD DE COTIZACIÓN - ROYAL WASH*%0A%0A` +
      `👤 *Nombre:* ${formData.name}%0A` +
      `📱 *Teléfono:* ${formData.phone}%0A` +
      `🏢 *Tipo:* ${formData.clientType}%0A` +
      `🧹 *Servicio:* ${formData.service}%0A` +
      `📝 *Detalles:* ${formData.notes || 'Ninguno'}`;

    window.open(`https://wa.me/59174933733?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="contact-section section-padding">
      <div className="container">
        {/* Quote banner from brochure */}
        <div className="quote-banner">
          <p className="quote-text">
            “Invertir en limpieza profesional es invertir en productividad y bienestar”
          </p>
          <span className="quote-brand">— Royal Wash Bolivia</span>
        </div>

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-col">
            <div className="badge-tag">
              <PhoneCall size={16} />
              <span>ATENCIÓN INMEDIATA</span>
            </div>

            <h2 className="section-title">
              Ponte en Contacto con <br />
              <span className="gold-gradient-text">Nuestros Especialistas</span>
            </h2>

            <p className="contact-desc">
              Estamos listos para evaluar tus requerimientos y diseñar una propuesta personalizada
              que se ajuste a tus horarios, espacios y presupuesto.
            </p>

            <div className="contact-methods-list">
              <a
                href="https://wa.me/59174933733"
                target="_blank"
                rel="noopener noreferrer"
                className="royal-card contact-method-item"
              >
                <div className="c-icon-box whatsapp-box">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <span className="c-label">WhatsApp Directo</span>
                  <strong className="c-value">+591 74933733</strong>
                  <span className="c-sub">Respuesta inmediata 24/7</span>
                </div>
              </a>

              <a href="tel:33211884" className="royal-card contact-method-item">
                <div className="c-icon-box">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="c-label">Teléfono Fijo</span>
                  <strong className="c-value">3-3211884</strong>
                  <span className="c-sub">Atención en horario de oficina</span>
                </div>
              </a>

              <a href="mailto:contacto@royalwash.app" className="royal-card contact-method-item">
                <div className="c-icon-box">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="c-label">Correo Electrónico</span>
                  <strong className="c-value">contacto@royalwash.app</strong>
                  <span className="c-sub">Para licitaciones y empresas</span>
                </div>
              </a>

              <div className="royal-card contact-method-item">
                <div className="c-icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="c-label">Ubicación y Cobertura</span>
                  <strong className="c-value">Santa Cruz de la Sierra, Bolivia</strong>
                  <span className="c-sub">Servicio a domicilio y corporativo</span>
                </div>
              </div>
            </div>

            <div className="service-hours-card">
              <Clock size={20} color="#D4AF37" />
              <div>
                <strong>Horarios de Atención y Operaciones:</strong>
                <p>Lunes a Sábado: 07:30 - 19:30 | Turnos nocturnos previa coordinación.</p>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="contact-form-col">
            <div className="royal-card form-card">
              <div className="form-card-header">
                <h3>Solicitar Presupuesto Gratuito</h3>
                <p>Completa el formulario y te responderemos al instante por WhatsApp.</p>
              </div>

              {submitted && (
                <div className="form-success-alert">
                  <CheckCircle size={20} />
                  <span>¡Mensaje preparado! Te redirigimos a WhatsApp para coordinar tu servicio.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="quote-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre y Apellido *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Número de WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Ej. 74933733"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="clientType">Tipo de Cliente</label>
                    <select
                      id="clientType"
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                    >
                      <option value="Empresa / Oficina">Empresa / Oficina</option>
                      <option value="Hogar / Particular">Hogar / Particular</option>
                      <option value="Constructora / Inmobiliaria">Constructora / Inmobiliaria</option>
                      <option value="Local Comercial">Local Comercial</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio Requerido *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Limpieza Corporativa">Limpieza Corporativa (Oficinas / Edificios)</option>
                    <option value="Limpieza Domiciliaria Profesional">Limpieza Domiciliaria Profesional</option>
                    <option value="Limpieza de Sofás y Muebles">Limpieza de Sofás y Muebles</option>
                    <option value="Lavado de Alfombras">Lavado de Alfombras</option>
                    <option value="Limpieza Post-Construcción">Limpieza Post-Construcción</option>
                    <option value="Lavado de Vehículos a Detalle">Lavado de Vehículos a Detalle</option>
                    <option value="Lavado y Sanitización de Colchón">Lavado y Sanitización de Colchón</option>
                    <option value="Limpieza de Vidrios en Altura">Limpieza de Vidrios en Altura</option>
                    <option value="Lavado de Zapatillas">Lavado de Zapatillas</option>
                    <option value="Paquete Completo">Paquete Combinado / Varios Servicios</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Detalles Adicionales (Metros aprox, dirección, etc.)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Ej. Oficina de 180 m2 en Equipetrol, requerimos servicio semanal..."
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <Send size={18} />
                  <span>Enviar Cotización por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
