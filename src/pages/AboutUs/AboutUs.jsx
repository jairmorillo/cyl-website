import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.backBtn}>
          <span className="material-symbols-outlined">arrow_back</span>
          Volver a la página principal
        </Link>

        <header className={styles.header}>
          <span className={styles.tag}>Nuestra Identidad & Valores</span>
          <h1>Nosotros</h1>
          <p className={styles.subtitle}>
            Conoce el propósito, visión y principios que guían la excelencia de Cordero y León, C.A.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Card Propósito */}
          <div className={`${styles.glassCard} ${styles.purposeCard}`}>
            <div className={styles.iconHeader}>
              <span className="material-symbols-outlined">church</span>
              <h2>Propósito</h2>
            </div>
            <p>
              Servir como medio para generar recursos financieros para la obra de la iglesia de nuestro Señor Jesucristo, sustentando sus proyectos, actividades, infraestructura e instituciones. Asimismo, buscamos ser una plataforma de impulso y financiamiento para emprendimientos e iniciativas de los miembros de la congregación, fomentando el crecimiento mutuo.
            </p>
          </div>

          {/* Card Visión */}
          <div className={styles.glassCard}>
            <div className={styles.iconHeader}>
              <span className="material-symbols-outlined">visibility</span>
              <h2>Visión</h2>
            </div>
            <p>
              Ser líderes pioneros en el desarrollo de soluciones empresariales personalizadas, transformando la manera de emprender y generar rentabilidad. Nos proyectamos como referentes en innovación a través de metodologías propias que aportan un valor diferencial y estratégico a cada uno de nuestros clientes.
            </p>
          </div>

          {/* Card Misión */}
          <div className={styles.glassCard}>
            <div className={styles.iconHeader}>
              <span className="material-symbols-outlined">rocket_launch</span>
              <h2>Misión</h2>
            </div>
            <p>
              Impulsar el crecimiento integral de nuestros clientes mediante estrategias innovadoras y soluciones adaptadas a sus necesidades específicas. Nos comprometemos a guiar el fortalecimiento de su marca y la optimización de su modelo de negocio, garantizando una experiencia de excelencia y un rendimiento superior.
            </p>
          </div>

          {/* Card Principios & Colosenses 3:23-24 */}
          <div className={`${styles.glassCard} ${styles.fullWidthCard}`}>
            <div className={styles.iconHeader}>
              <span className="material-symbols-outlined">verified</span>
              <h2>Principios y Valores</h2>
            </div>
            <p className={styles.principlesLead}>
              Actuamos bajo principios de <strong>compromiso, lealtad, fidelidad, excelencia y sinceridad</strong>, ofreciendo siempre las mejores alternativas del mercado. Todo nuestro trabajo se realiza con la convicción de honrar a Dios en la tierra, siguiendo Su palabra:
            </p>

            <blockquote className={styles.bibleQuote}>
              <span className="material-symbols-outlinedQuote">format_quote</span>
              <p>
                "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres; sabiendo que del Señor recibiréis la recompensa de la herencia, porque a Cristo el Señor servís."
              </p>
              <cite>— Colosenses 3:23-24</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
