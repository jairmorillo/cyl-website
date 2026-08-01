import React from 'react';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import styles from './Benefits.module.css';

const Benefits = () => {
  return (
    <section className={`section-light ${styles.benefitsSection}`} id="benefits">
      <ParticlesBackground />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={`${styles.header} reveal-up`}>
          <h2>Impacto Medible. Resultados Tangibles.</h2>
          <p>
            No vendemos servicios aislados, entregamos resultados de negocio. Nuestro enfoque se centra en métricas clave que impulsan la rentabilidad y la eficiencia operativa.
          </p>
        </div>
        
        <div className={styles.grid}>
          <div className={`${styles.item} reveal-up`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">monitoring</span>
            </div>
            <h4>Aumento de ROI</h4>
            <p>Optimizamos la inversión tecnológica para asegurar retornos sostenibles a largo plazo.</p>
          </div>
          
          <div className={`${styles.item} reveal-up`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">account_balance_wallet</span>
            </div>
            <h4>Incremento de Márgenes</h4>
            <p>Reducción de costos operativos mediante automatización y procesos eficientes.</p>
          </div>
          
          <div className={`${styles.item} reveal-up`}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">lan</span>
            </div>
            <h4>Organización Óptima</h4>
            <p>Estructuración de datos y flujos de trabajo claros para una toma de decisiones ágil.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
