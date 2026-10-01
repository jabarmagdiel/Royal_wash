import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: '¿Por qué elegirnos?', href: '#por-que-nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Equipamiento', href: '#equipamiento' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Official Logo */}
        <a href="#inicio" className="navbar-brand" aria-label="Royal Wash Inicio">
          <img src="/images/logo.png" alt="Royal Wash - Empresa de Limpieza" className="navbar-logo-img" />
          <div className="navbar-brand-col">
            <span className="brand-title-text">ROYAL WASH</span>
            <span className="brand-tagline-text">SERVICIOS DE LIMPIEZA</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="navbar-actions">
          <a
            href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20para%20servicios%20de%20limpieza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary nav-cta-btn"
          >
            <Sparkles size={16} />
            <span>Cotizar Ahora</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/59174933733?text=Hola%20Royal%20Wash,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20para%20servicios%20de%20limpieza"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PhoneCall size={18} />
            <span>WhatsApp: 74933733</span>
          </a>
        </div>
      </div>
    </header>
  );
};
