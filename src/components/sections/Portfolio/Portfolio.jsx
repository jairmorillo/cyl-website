import React from 'react';
import Button from '../../ui/Button/Button';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import styles from './Portfolio.module.css';

const projects = [
  {
    title: 'Florida Quality Roof Solution',
    category: 'Construcción & CRM / Florida, USA',
    metric: '+40% Captación Zoho CRM',
    description: 'Plataforma web corporativa integrada directamente con Zoho CRM para captura automatizada de leads, cotizaciones e historial de clientes.',
    image: '/projects/fqroofs.com.png',
    url: 'https://fqroofs.com/'
  },
  {
    title: 'DNA Roofing LLC',
    category: 'Servicios Industriales / Florida, USA',
    metric: '+35% Conversión Digital',
    description: 'Sitio web moderno enfocado en la presentación de servicios de techado comercial, portafolio de obras y solicitudes de inspección rápida.',
    image: '/projects/dna-roofing.png',
    url: 'https://dnaroofingfl.com/'
  },
  {
    title: 'RZ Agentes Aduanales & Tributarios',
    category: 'Comercio Exterior & Legal B2B',
    metric: 'Posicionamiento Institucional',
    description: 'Portal web corporativo para consultoría aduanera, asesoría tributaria e importación/exportación estratégica en mercados internacionales.',
    image: '/projects/Rz-logistica-y-aduanera.png',
    url: 'https://rzaduaneraytributaria.com/'
  },
  {
    title: 'My Steps App (Plataforma Médica)',
    category: 'MedTech / Simulación de Prótesis',
    metric: 'Innovación Biomecánica 3D',
    description: 'Aplicación web avanzada para simulación prostética y personalización biomecánica, optimizando el diagnóstico médico y la experiencia clínica.',
    image: '/projects/my-steps-app.png',
    url: 'https://app.mysteps-app.com/'
  },
  {
    title: 'My Steps Landing Page',
    category: 'MedTech / Ecosistema Digital',
    metric: 'Lanzamiento de Producto',
    description: 'Landing page de alto rendimiento diseñada para la presentación del ecosistema My Steps, captando clínicas, médicos y pacientes.',
    image: '/projects/my-steps-landing.png',
    url: 'https://mysteps-app.com/'
  }
];

const Portfolio = () => {
  return (
    <section className={`section-light ${styles.portfolioSection}`} id="portafolio">
      <ParticlesBackground />
      
      <div className={`container ${styles.container}`}>
        <div className={`${styles.header} reveal-up`}>
          <span className={styles.tag}>Casos de Éxito</span>
          <h2>Proyectos Destacados</h2>
          <p>Resultados reales entregados a clientes mediante soluciones tecnológicas a medida.</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`${styles.card} reveal-up`}>
              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <span className={styles.badge}>{project.metric}</span>
              </div>
              
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                
                <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                  Visitar Sitio
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
