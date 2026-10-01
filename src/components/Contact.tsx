import React, { useState } from 'react';
import { Phone, PhoneCall, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    clientType: 'Empresa / Oficina',
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
    <section id="contacto" className="contact-hybrid-section">
      <div className="container">
        {/* Quote banner from brochure */}
        <div className="quote-editorial-box">
          <p className="quote-headline">
            “Invertir en limpieza profesional es invertir en productividad y bienestar”
          </p>
          <span className="quote-sign">— Brochure Oficial Royal Wash Bolivia</span>
        </div>

        <div className="contact-split-grid">
          {/* Left Column: Deep Navy Information Card */}
          <div className="contact-navy-card">
            <div className="contact-pill-tag">
              <PhoneCall size={15} />
              <span>ATENCIÓN INMEDIATA</span>
            </div>

            <h2 className="contact-card-heading">
              Conversemos Sobre tus <br />
              <span className="gold-gradient-text">Espacios & Necesidades</span>
            </h2>

            <p className="contact-card-intro">
              Estamos listos para evaluar tus requerimientos y diseñar una propuesta clara, 
              eficiente y adaptada a tus horarios y presupuesto.
            </p>

            <div className="contact-channels-group">
              <a
                href="https://wa.me/59174933733"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link whatsapp-channel"
              >
                <div className="channel-icon-wrap wa-icon-wrap">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <span className="channel-type">WhatsApp Oficial</span>
                  <strong className="channel-val">+591 74933733</strong>
                  <span className="channel-hint">Respuesta express en minutos</span>
                </div>
              </a>

              <a href="tel:33211884" className="channel-link">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="channel-type">Teléfono Fijo</span>
                  <strong className="channel-val">3-3211884</strong>
                  <span className="channel-hint">Oficinas comerciales</span>
                </div>
              </a>

              <a href="mailto:contacto@royalwash.app" className="channel-link">
                <div className="channel-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="channel-type">Correo Corporativo</span>
                  <strong className="channel-val">contacto@royalwash.app</strong>
                  <span className="channel-hint">Para licitaciones y empresas</span>
                </div>
              </a>

              <div className="channel-link non-clickable">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="channel-type">Ciudad & Cobertura</span>
                  <strong className="channel-val">Santa Cruz de la Sierra, Bolivia</strong>
                  <span className="channel-hint">Atención a domicilio e industrial</span>
                </div>
              </div>
            </div>

            <div className="hours-ribbon">
              <Clock size={18} className="hours-icon" />
              <div>
                <strong>Horario de Operaciones:</strong>
                <p>Lunes a Sábado: 07:30 - 19:30 | Turnos nocturnos previa coordinación.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Crisp White Card Form */}
          <div className="contact-form-card">
            <div className="form-heading-area">
              <span className="form-eyebrow">COTIZACIÓN RÁPIDA</span>
              <h3 className="form-main-title">Solicita tu Presupuesto Sin Costo</h3>
              <p className="form-main-desc">
                Completa este formulario breve y te responderemos al instante por WhatsApp con una estimación.
              </p>
            </div>

            {submitted && (
              <div className="form-success-banner">
                <CheckCircle size={18} />
                <span>¡Perfecto! Te redirigimos a WhatsApp para atenderte de inmediato.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="custom-quote-form">
              <div className="input-field-group">
                <label htmlFor="name">Nombre y Apellido *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Ej. Ing. Carlos Mendoza"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-fields-row">
                <div className="input-field-group">
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

                <div className="input-field-group">
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

              <div className="input-field-group">
                <label htmlFor="service">Servicio Principal Requerido *</label>
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
                  <option value="Varios Servicios / Paquete">Paquete Múltiple / Combinado</option>
                </select>
              </div>

              <div className="input-field-group">
                <label htmlFor="notes">Detalles del Lugar (m² estimados, zona o dirección)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Ej. Oficina de 200 m² en Equipetrol, requerimos servicio semanal..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary quote-submit-action">
                <Send size={18} />
                <span>Enviar Solicitud por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
