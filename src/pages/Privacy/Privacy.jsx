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
          <span className={styles.tag}>Legal & Privacidad Internacional</span>
          <h1>Política de Privacidad Global</h1>
          <p className={styles.lastUpdated}>Última actualización: 22 de Agosto de 2026</p>
        </header>

        <div className={styles.glassCard}>
          <section className={styles.section}>
            <h2>1. Responsable del Tratamiento e Identificación</h2>
            <p>
              Esta Política de Privacidad regula el tratamiento de datos personales realizado por <strong>Consultoría Cordero y León, C.A. (CYL)</strong> (en adelante, &quot;CYL&quot;, &quot;nosotros&quot; o &quot;la Firma&quot;), prestadora de servicios especializados de consultoría tecnológica B2B, arquitectura de software, automatización de procesos operativos e integración de plataformas CRM (incluyendo el ecosistema Zoho).
            </p>
            <div className={styles.calloutBox}>
              <div className={styles.calloutTitle}>
                <span className="material-symbols-outlined">contact_mail</span>
                Canal Oficial de Privacidad y Contacto
              </div>
              <p>
                Para cualquier consulta, solicitud de ejercicio de derechos o requerimiento relativo a la privacidad de sus datos, puede comunicarse directamente a nuestro correo electrónico corporativo:{' '}
                <a href="mailto:cyl.latams@gmail.com" className={styles.legalLink}>cyl.latams@gmail.com</a> o mediante nuestro canal oficial de atención telefónica/WhatsApp:{' '}
                <a href="https://wa.me/584246676099" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>+58 424 667 6099</a>.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>2. Marco Regulatorio y Alcance Internacional</h2>
            <p>
              En CYL operamos bajo un estándar de privacidad por diseño y por defecto (<em>Privacy by Design and by Default</em>), rigiéndonos por los principios de legalidad, lealtad, transparencia, limitación de la finalidad, minimización de datos, exactitud, limitación del plazo de conservación, integridad y confidencialidad. Nuestras prácticas están alineadas con los principales marcos regulatorios internacionales:
            </p>
            <ul>
              <li><strong>RGPD / GDPR (Unión Europea - Reglamento UE 2016/679):</strong> Reglamento General de Protección de Datos Personales para ciudadanos y residentes del Espacio Económico Europeo.</li>
              <li><strong>CCPA / CPRA (California, EE. UU.):</strong> California Consumer Privacy Act y California Privacy Rights Act.</li>
              <li><strong>LGPD (Brasil - Ley N° 13.709/2018):</strong> Lei Geral de Proteção de Dados Pessoais.</li>
              <li><strong>Normativas Latinoamericanas de Protección de Datos y Habeas Data:</strong> Legislaciones vigentes en los países donde operan nuestros clientes y contrapartes corporativas.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Categorías de Datos Personales Recopilados</h2>
            <p>
              Recopilamos exclusivamente los datos estrictamente necesarios para la evaluación, formulación de propuestas y prestación de nuestros servicios de consultoría corporativa:
            </p>
            <ul>
              <li><strong>Datos de Identificación y Contacto Profesional:</strong> Nombre comercial o razón social de la empresa, nombre del representante o contacto técnico, cargo corporativo, dirección de correo electrónico institucional y número telefónico o WhatsApp de contacto facilitados en nuestros formularios o citas exploratorias.</li>
              <li><strong>Información Técnica y de Arquitectura de Sistemas:</strong> Datos de requerimientos funcionales, especificaciones de flujos de trabajo e información técnica de plataformas externas (como Zoho CRM, ERPs o servicios Cloud) proporcionados voluntariamente por el cliente bajo estrictos acuerdos de confidencialidad (NDA).</li>
              <li><strong>Datos de Navegación y Telemetría Técnica:</strong> Información anonimizada de acceso web recopilada automáticamente por los servidores (dirección IP anonimizada, tipo y versión del navegador web, sistema operativo, páginas visitadas y marcas de tiempo), utilizada exclusivamente para el mantenimiento de la seguridad perimetral y optimización de rendimiento.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Bases Legales del Tratamiento (Art. 6 RGPD)</h2>
            <p>
              El tratamiento de sus datos personales se fundamenta en las siguientes bases jurídicas reconocidas internacionalmente:
            </p>
            <ul>
              <li><strong>Ejecución Contractual y Medidas Precontractuales:</strong> El tratamiento es indispensable para atender su solicitud de consultoría, elaborar propuestas de arquitectura tecnológica, celebrar contratos de servicios B2B y ejecutar los acuerdos formalizados.</li>
              <li><strong>Consentimiento Expreso:</strong> Otorgado voluntariamente por el usuario al enviar formularios de contacto, solicitar diagnósticos o suscribirse a canales informativos directos.</li>
              <li><strong>Interés Legítimo:</strong> Para garantizar la seguridad cibernética de nuestra plataforma, prevenir accesos no autorizados o fraudes, y optimizar la experiencia técnica de los usuarios corporativos.</li>
              <li><strong>Cumplimiento de Obligaciones Legales:</strong> Atender requerimientos legales, tributarios o normativos emitidos por autoridades competentes.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Finalidades Específicas del Tratamiento</h2>
            <p>
              Los datos personales y corporativos recabados son tratados únicamente para los siguientes fines legítimos:
            </p>
            <ol>
              <li>Agendar, coordinar y realizar sesiones de consultoría estratégica y diagnósticos de transformación digital.</li>
              <li>Diseñar presupuestos, propuestas de desarrollo de software, planes de automatización e integraciones a medida.</li>
              <li>Prestar los servicios contratados, gestionar la relación comercial y brindar soporte técnico continuo.</li>
              <li>Enviar comunicaciones corporativas y transaccionales relativas a proyectos en curso o actualizaciones de servicio.</li>
              <li>Monitorear y resguardar la estabilidad, integridad y seguridad operativa del portal web.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>6. Conservación y Retención de Datos</h2>
            <p>
              Conservamos los datos personales únicamente durante el tiempo estrictamente necesario para cumplir con las finalidades para las que fueron recabados, o mientras exista una relación comercial activa. Finalizada la relación, los datos se mantendrán bloqueados durante los plazos legalmente exigibles para la atención de responsabilidades contractuales o legales, procediéndose posteriormente a su supresión definitiva o anonimización irreversible.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Destinatarios y Transferencias Internacionales de Datos</h2>
            <p>
              CYL no comercializa, alquila ni comparte datos personales con terceros para fines publicitarios de ninguna índole. Los datos podrán ser tratados por proveedores de servicios tecnológicos de primer nivel que actúan en calidad de Encargados del Tratamiento (<em>Data Processors</em>):
            </p>
            <ul>
              <li><strong>Proveedores de Alojamiento y Red (CDN):</strong> Infraestructura en la nube con altos estándares de seguridad física y lógica (Cloudflare Pages).</li>
              <li><strong>Sistemas de Gestión de Relación con Clientes (CRM):</strong> Plataformas líderes de gestión como Zoho CRM para el seguimiento de solicitudes corporativas.</li>
              <li><strong>Plataformas de Comunicación Segura:</strong> Meta / WhatsApp Business API para la comunicación directa y ágil con clientes solicitantes.</li>
            </ul>
            <p>
              Cuando las transferencias de datos involucren destinos internacionales fuera del Espacio Económico Europeo (EEE), CYL garantiza la aplicación de mecanismos de salvaguarda adecuados, tales como las <strong>Cláusulas Contractuales Tipo (Standard Contractual Clauses - SCC)</strong> aprobadas por la Comisión Europea y medidas complementarias de cifrado.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Derechos de los Titulares (ARCO / RGPD / CCPA / LGPD)</h2>
            <p>
              De acuerdo con las leyes internacionales aplicables, usted ostenta los siguientes derechos sobre sus datos personales:
            </p>
            <ul>
              <li><strong>Acceso:</strong> Derecho a conocer qué datos personales tenemos en nuestro poder y obtener una copia de los mismos.</li>
              <li><strong>Rectificación:</strong> Derecho a solicitar la corrección o actualización de datos inexactos o incompletos.</li>
              <li><strong>Supresión (&quot;Derecho al Olvido&quot;):</strong> Derecho a solicitar la eliminación de sus datos cuando ya no sean necesarios para los fines que motivaron su recogida.</li>
              <li><strong>Limitación del Tratamiento:</strong> Derecho a solicitar que se restrinja el procesamiento de sus datos en supuestos específicos.</li>
              <li><strong>Portabilidad:</strong> Derecho a recibir sus datos personales en un formato estructurado, de uso común y lectura mecánica.</li>
              <li><strong>Oposición:</strong> Derecho a oponerse en cualquier momento al tratamiento de sus datos por motivos relacionados con su situación particular.</li>
              <li><strong>No Discriminación:</strong> Derecho a no recibir un trato discriminatorio ni variación en la calidad del servicio por ejercer cualquiera de sus derechos de privacidad (conforme a la CCPA/CPRA).</li>
            </ul>

            <div className={styles.calloutBox}>
              <div className={styles.calloutTitle}>
                <span className="material-symbols-outlined">verified_user</span>
                Declaración de No Venta de Información (Do Not Sell / Share)
              </div>
              <p>
                En cumplimiento con la CCPA/CPRA y estándares globales, <strong>CYL no vende ni comparte su información personal</strong> con terceros para fines de publicidad conductual cruzada ni monetización comercial de datos.
              </p>
            </div>

            <p>
              Para ejercer cualquiera de estos derechos, envíe una solicitud formal por escrito adjuntando un documento acreditativo de su identidad al correo{' '}
              <a href="mailto:cyl.latams@gmail.com" className={styles.legalLink}>cyl.latams@gmail.com</a>. Atenderemos su solicitud en un plazo máximo de 30 días naturales sin costo alguno. Asimismo, tiene derecho a presentar una reclamación ante la Autoridad de Control de Protección de Datos competente de su jurisdicción.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Política de Cookies y Tecnologías de Rastreo</h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas indispensables para el correcto funcionamiento, navegación y seguridad del portal. No empleamos cookies de seguimiento de terceros con fines publicitarios no solicitados ni realizamos perfilado comercial automatizado sin su consentimiento previo. Usted puede configurar o deshabilitar el uso de cookies en cualquier momento a través de las opciones de configuración de su navegador web.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Seguridad y Cifrado de la Información</h2>
            <p>
              En CYL adoptamos rigurosas medidas de seguridad técnicas, organizativas y administrativas orientadas a prevenir la pérdida, mal uso, alteración o acceso no autorizado a los datos tratados. Esto incluye el uso de protocolos de comunicación cifrada (TLS/HTTPS con cifrado robusto), políticas estrictas de control de acceso por roles y acuerdos de confidencialidad suscritos con todo el personal y colaboradores.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Privacidad de Menores (COPPA / RGPD)</h2>
            <p>
              Nuestros servicios, contenidos y portal web están dirigidos exclusivamente a profesionales, directivos y empresas (personas mayores de 18 años). No recopilamos conscientemente información personal de menores de edad. Si detectamos que se ha recabado información de un menor sin la debida autorización parental legal, procederemos a su eliminación inmediata de nuestros registros.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Actualizaciones y Notificaciones</h2>
            <p>
              CYL se reserva el derecho de modificar o actualizar la presente Política de Privacidad para adecuarla a novedades legislativas, jurisprudenciales o cambios operacionales. Cualquier actualización sustancial será publicada en esta misma página con indicación expresa de la fecha de última revisión. Le recomendamos consultar este documento periódicamente.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

