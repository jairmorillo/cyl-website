import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import styles from './Services.module.css';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={`section-light ${styles.servicesSection}`} id="services" ref={sectionRef}>
      <ParticlesBackground />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.header}>
          <span className={styles.tag}>Ecosistema de Soluciones</span>
          <h2 className={styles.title}>Servicios Especializados</h2>
        </div>
        
        <div className={styles.grid}>
          {/* Large Card 1 */}
          <div className={`${styles.card} ${styles.cardLarge} service-card`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">memory</span>
            </div>
            <h3>Automatización de Procesos</h3>
            <p>
              Reducimos la fricción operativa mediante la integración de sistemas inteligentes. Eliminamos tareas repetitivas para que tu equipo se concentre en actividades de alto valor.
            </p>
            <a href="#contact" className={styles.link}>
              Conocer más <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {/* Small Card 1 */}
          <div className={`${styles.card} service-card`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">devices</span>
            </div>
            <h3>Desarrollo de Productos</h3>
            <p>
              Construimos plataformas Web, Landing Pages y Apps nativas con arquitecturas escalables y diseño centrado en el usuario (B2B/B2C).
            </p>
          </div>

          {/* Small Card 2 */}
          <div className={`${styles.card} service-card`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h3>Estrategias de Marketing</h3>
            <p>
              Posicionamiento corporativo y embudos de conversión precisos para maximizar la captación de leads cualificados en mercados competitivos.
            </p>
          </div>

          {/* Small Card 3 */}
          <div className={`${styles.card} service-card`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">group</span>
            </div>
            <h3>Capacitación de Personal</h3>
            <p>
              Programas de upskilling tecnológico y metodologías ágiles para empoderar a tu fuerza laboral frente a los retos digitales.
            </p>
          </div>

          {/* Small Card 4 */}
          <div className={`${styles.card} ${styles.cardDark} service-card`}>
            <div className={styles.iconWrapperDark}>
              <span className="material-symbols-outlined">support_agent</span>
            </div>
            <h3>Consultoría Tecnológica</h3>
            <p>Auditoría IT y roadmap estratégico.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
