import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Equipment } from './components/Equipment';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import './App.css';

export const App: React.FC = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Process />
        <Equipment />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
