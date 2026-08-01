import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Privacy.module.css';

const Privacy = () => {
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
          <span className={styles.tag}>Legal & Conformidad</span>
          <h1>Política de Privacidad</h1>
          <p className={styles.lastUpdated}>Última actualización: 1 de Agosto de 2026</p>
        </header>

        <div className={styles.glassCard}>
          <section className={styles.section}>
            <h2>1. Introducción y Compromiso de Privacidad</h2>
            <p>
              En <strong>Consultoría Cordero y León, C.A. (CYL)</strong>, valoramos profundamente la confianza de nuestros clientes y visitantes corporativos. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos la información personal y empresarial recabada a través de nuestro portal web y servicios de consultoría estratégica B2B.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Información que Recopilamos</h2>
            <p>
              Recopilamos únicamente los datos necesarios para brindar servicios de consultoría tecnológica de alto nivel y responder a sus solicitudes comerciales:
            </p>
            <ul>
              <li><strong>Datos de Identificación y Contacto:</strong> Nombre de la empresa, correo electrónico corporativo y número telefónico/WhatsApp facilitados en nuestros formularios de contacto o programación de consultorías.</li>
              <li><strong>Información Técnica e Integración:</strong> Datos requeridos para la integración automatizada con plataformas como Zoho CRM, sistemas ERP o infraestructuras Cloud, siempre bajo acuerdos de confidencialidad estrictos.</li>
              <li><strong>Datos de Navegación:</strong> Información anónima de uso web (como dirección IP, navegador y sistema operativo) para optimizar el rendimiento y la seguridad del sitio.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Uso de la Información</h2>
            <p>
              La información recopilada se utiliza de manera exclusiva para los siguientes fines:
            </p>
            <ul>
              <li>Agendar y llevar a cabo sesiones de consultoría estratégica B2B.</li>
              <li>Diseñar y ejecutar propuestas de arquitectura de software, automatización de procesos e integración de CRM.</li>
              <li>Enviar comunicaciones corporativas relevantes y seguimiento de proyectos contratados.</li>
              <li>Cumplir con las obligaciones legales y normativas aplicables.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Protección y Seguridad de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas de estándar empresarial para proteger sus datos contra el acceso no autorizado, alteración, divulgación o destrucción. No vendemos, alquilamos ni comercializamos datos personales a terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Sus Derechos y Contacto</h2>
            <p>
              Usted tiene derecho a acceder, rectificar, actualizar o solicitar la eliminación de su información en cualquier momento. Para ejercer estos derechos o consultar cualquier inquietud sobre esta política, puede comunicarse directamente con nuestro equipo ejecutivo a través de nuestro formulario oficial de contacto.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
