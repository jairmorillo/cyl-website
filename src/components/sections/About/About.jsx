import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`section-dark ${styles.aboutSection}`} id="about">
      <div className={styles.topGradient}></div>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={`${styles.textContent} reveal-left`}>
          <h2 className={styles.title}>Precisión y Transparencia</h2>
          <p className={styles.lead}>
            Entendemos que el crecimiento sostenible no es accidental. Nace de la intersección entre datos precisos, tecnología innovadora y una estrategia implacable.
          </p>
          <p className={styles.description}>
            Nuestro propósito es claro: colaborar contigo para transformar la complejidad operativa en ventaja competitiva. Actuamos como una extensión de tu equipo directivo, aportando claridad donde hay incertidumbre.
          </p>
        </div>
        
        <div className={`${styles.cardContainer} reveal-right`}>
          <div className={styles.philosophyCard}>
            <div className={styles.cardIcon}>
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <h3>Nuestra Filosofía</h3>
            <ul className={styles.list}>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                <span>Estrategias basadas en datos concretos.</span>
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                <span>Ejecución tecnológica impecable.</span>
              </li>
              <li>
                <span className="material-symbols-outlined">check_circle</span>
                <span>Alineación total con tus objetivos de negocio.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
