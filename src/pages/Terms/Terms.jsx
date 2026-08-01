import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Terms.module.css';

const Terms = () => {
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
          <span className={styles.tag}>Legal & Marco Regulatorio</span>
          <h1>Términos y Condiciones de Servicio</h1>
          <p className={styles.lastUpdated}>Última actualización: 1 de Agosto de 2026</p>
        </header>

        <div className={styles.glassCard}>
          <section className={styles.section}>
            <h2>1. Aceptación de los Términos</h2>
            <p>
              Al acceder y navegar por el portal web de <strong>Consultoría Cordero y León, C.A. (CYL)</strong> o al solicitar cualquiera de nuestros servicios de consultoría estratégica B2B, integración con Zoho CRM o desarrollo de plataformas web, usted acepta cumplir con estos Términos y Condiciones.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Alcance de los Servicios</h2>
            <p>
              CYL presta servicios especializados de consultoría de negocios, automatización de procesos operativos, arquitectura de software e integración de soluciones CRM. El alcance específico, entregables, plazos y costos de cada proyecto se formalizarán mediante propuestas comerciales o contratos individuales aprobados por ambas partes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos presentes en este sitio web (textos, marcas, logos, diseños gráficos, códigos fuente e imágenes corporativas) son propiedad exclusiva de <strong>Consultoría Cordero y León, C.A.</strong> o cuentan con la licencia correspondiente. Queda prohibida su reproducción, distribución o modificación sin autorización previa y por escrito.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Uso Aceptable y Confidencialidad</h2>
            <p>
              El usuario se compromete a no utilizar este portal para fines ilícitos, envío de código malicioso o interrupción del servicio. Toda información técnica, operativa o financiera compartida durante la prestación de servicios estará resguardada bajo estrictas cláusulas de confidencialidad comercial.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitación de Responsabilidad</h2>
            <p>
              CYL realiza sus mayores esfuerzos para asegurar la disponibilidad continua de su portal y la máxima precisión en sus consultorías. No obstante, CYL no se hace responsable de interrupciones de servicio atribuibles a terceros, fallas de proveedores de internet o eventos de fuerza mayor ajenos al control de la firma.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Ley Aplicable y Jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes vigentes de la República Bolivariana de Venezuela. Cualquier controversia será sometida a los tribunales competentes de dicha jurisdicción.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
