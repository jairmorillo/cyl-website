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
          <span className={styles.tag}>Legal & Marco Regulatorio Internacional</span>
          <h1>Términos y Condiciones de Servicio</h1>
          <p className={styles.lastUpdated}>Última actualización: 22 de Agosto de 2026</p>
        </header>

        <div className={styles.glassCard}>
          <section className={styles.section}>
            <h2>1. Aceptación de los Términos y Capacidad Legal</h2>
            <p>
              El presente documento establece los Términos y Condiciones de Servicio (en adelante, los &quot;Términos&quot;) que rigen el acceso, navegación y uso del portal web oficial de <strong>Consultoría Cordero y León, C.A. (CYL)</strong> (en adelante, &quot;CYL&quot; o &quot;la Firma&quot;), así como la solicitud y contratación de nuestros servicios de consultoría estratégica y desarrollo tecnológico.
            </p>
            <p>
              Al acceder a este sitio web, solicitar una sesión de consultoría o interactuar con nuestros canales corporativos, usted declara ser mayor de edad legal en su jurisdicción y contar con plena capacidad jurídica para vincularse a estos Términos o para representar válidamente a la entidad comercial o persona jurídica en cuyo nombre actúa. Si no está de acuerdo con la totalidad de estas disposiciones, deberá abstenerse de utilizar este portal.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Objeto y Alcance de los Servicios B2B</h2>
            <p>
              CYL presta servicios especializados de consultoría de transformación digital dirigidos exclusivamente al ámbito corporativo e institucional (B2B). Nuestras áreas de especialidad comprenden:
            </p>
            <ul>
              <li><strong>Arquitectura y Desarrollo de Software:</strong> Diseño, ingeniería e implementación de plataformas web modernas, APIs y sistemas a medida.</li>
              <li><strong>Automatización e Integración de Procesos:</strong> Conexión de flujos de trabajo, automatización robótica de procesos y despliegue de soluciones CRM (con especialización en el ecosistema Zoho).</li>
              <li><strong>Consultoría Tecnológica y Estratégica:</strong> Diagnóstico de madurez digital, optimización operativa y asesoramiento en infraestructura Cloud.</li>
            </ul>
            <div className={styles.calloutBox}>
              <div className={styles.calloutTitle}>
                <span className="material-symbols-outlined">description</span>
                Prevalencia de Contratos Específicos (SOW / SLA)
              </div>
              <p>
                Los términos comerciales, alcances funcionales, cronogramas, precios, garantías específicas y Acuerdos de Nivel de Servicio (SLA) de cada proyecto formalmente contratado se regirán de manera prioritaria por las <strong>Propuestas Comerciales, Declaraciones de Trabajo (Statement of Work - SOW) o Contratos de Prestación de Servicios</strong> suscritos bilateralmente entre CYL y el cliente.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>3. Uso Aceptable y Restricciones de la Plataforma</h2>
            <p>
              El usuario se compromete a utilizar el portal web de manera diligente, lícita y de conformidad con las buenas costumbres y los estándares internacionales de seguridad informática. Queda expresamente prohibido:
            </p>
            <ul>
              <li>Realizar actividades de extracción automatizada de datos (<em>web scraping</em>, minería de datos o <em>screen scraping</em>) sin la previa autorización expresa y por escrito de CYL.</li>
              <li>Ejecutar pruebas de penetración, análisis de vulnerabilidades o escaneos de seguridad no autorizados sobre nuestra infraestructura o redes asociadas.</li>
              <li>Introducir, propagar o ejecutar virus, troyanos, gusanos lógicos o cualquier código malicioso concebido para dañar, interceptar o interrumpir el funcionamiento de sistemas informáticos.</li>
              <li>Utilizar los formularios o canales de comunicación para el envío masivo de comunicaciones comerciales no solicitadas (SPAM).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los derechos de propiedad intelectual e industrial relativos a este portal web —incluyendo de forma enunciativa mas no limitativa: códigos fuente, arquitecturas de software, interfaces gráficas, logotipos, marcas comerciales, textos explicativos, metodologías de consultoría, diseños, audios e imágenes— son de la titularidad exclusiva de <strong>Consultoría Cordero y León, C.A.</strong> o se encuentran debidamente licenciados a su favor.
            </p>
            <p>
              Queda estrictamente prohibida la reproducción total o parcial, distribución, comunicación pública, transformación o descompilación de cualquier elemento de este sitio sin el consentimiento previo, expreso y por escrito de CYL.
            </p>
            <div className={styles.calloutBox}>
              <div className={styles.calloutTitle}>
                <span className="material-symbols-outlined">copyright</span>
                Marcas y Referencias a Terceros
              </div>
              <p>
                Zoho®, Google®, Meta®, Cloudflare® y demás marcas comerciales o logotipos de terceros referenciados en este sitio pertenecen a sus respectivos titulares. Su mención responde únicamente a propósitos de interoperabilidad técnica y descripción de servicios de integración tecnológica, sin que ello implique patrocinio o propiedad directa sobre tales marcas registradas.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>5. Confidencialidad y Secreto Comercial</h2>
            <p>
              Toda información de carácter técnico, financiero, operacional o estratégico intercambiada entre CYL y los prospectos o clientes durante las reuniones exploratorias, sesiones de consultoría o negociaciones comerciales será tratada bajo el más riguroso deber de secreto profesional y confidencialidad comercial. Ninguna de las partes divulgará información propietaria a terceros sin consentimiento previo, salvo mandato judicial de autoridad competente.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Exclusión de Garantías (&quot;As Is&quot; / &quot;Tal Cual&quot;)</h2>
            <p>
              El sitio web y la información contenida en él se proporcionan &quot;tal cual&quot; (<em>as is</em>) y &quot;según disponibilidad&quot; (<em>as available</em>). Aunque CYL aplica rigurosos estándares de calidad técnica, no garantiza que la disponibilidad del portal sea continua, ininterrumpida o totalmente libre de errores provocados por factores fuera de su control razonable, tales como contingencias de proveedores de telecomunicaciones o incidencias de conectividad global.
            </p>
            <p>
              Los diagnósticos y contenidos divulgados en el sitio tienen fines informativos e ilustrativos de las capacidades de consultoría de la Firma, y no constituyen por sí mismos un asesoramiento técnico o legal definitivo aplicable a casos particulares sin la contratación de un estudio personalizado.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Limitación de Responsabilidad (Limitation of Liability)</h2>
            <p>
              En la máxima medida permitida por las leyes internacionales aplicables, CYL, sus directores, empleados, socios y colaboradores no serán responsables bajo ninguna circunstancia por:
            </p>
            <ul>
              <li>Daños indirectos, incidentales, especiales, consecuenciales, punitivos o ejemplares derivados del uso o la imposibilidad de uso del sitio web.</li>
              <li>Pérdida de beneficios empresariales, lucro cesante, interrupción de actividades comerciales, pérdida de datos o de oportunidades de negocio.</li>
              <li>Decisiones operativas o comerciales adoptadas por el cliente sin la suscripción de un contrato formal de consultoría y seguimiento técnico.</li>
            </ul>
            <p>
              En caso de reclamaciones dimanantes de contratos formales de servicios, la responsabilidad total acumulada de CYL estará estrictamente limitada al monto efectivamente facturado y abonado por el cliente a CYL durante los tres (3) meses inmediatamente anteriores al hecho causante de la reclamación.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Enlaces a Sitios y Plataformas de Terceros</h2>
            <p>
              Este sitio web puede incorporar enlaces o redirecciones hacia plataformas de terceros (tales como WhatsApp, LinkedIn o herramientas de proveedores de nube). CYL no controla, supervisa ni asume responsabilidad alguna respecto a las políticas de privacidad, condiciones de uso, contenidos o prácticas de seguridad implementadas por dichos sitios externos. El acceso a tales plataformas se realiza bajo la exclusiva responsabilidad del usuario.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Indemnización</h2>
            <p>
              El usuario acepta defender, indemnizar y mantener indemne a CYL, sus filiales, directivos, agentes y empleados frente a cualquier reclamación, demanda, daño, pérdida, responsabilidad, costo o gasto (incluidos honorarios legales razonables) que surja directa o indirectamente del uso indebido del portal, de la infracción de estos Términos o de la violación de derechos de terceros o de la normativa legal aplicable.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Resolución Escalonada de Controversias y Jurisdicción</h2>
            <p>
              Cualquier controversia, discrepancia o reclamación derivada de la interpretación o ejecución de estos Términos se sustanciará conforme al siguiente procedimiento escalonado:
            </p>
            <ol>
              <li><strong>Negociación Directa de Buena Fe:</strong> Las partes se comprometen a intentar resolver cualquier disputa de forma amistosa y de mutuo acuerdo durante un período inicial de treinta (30) días continuos contados a partir de la notificación fehaciente de la controversia.</li>
              <li><strong>Mecanismo Jurisdiccional:</strong> En caso de no alcanzarse un acuerdo amistoso en el plazo indicado, la controversia será sometida a los tribunales competentes conforme a los tratados de comercio internacional y las disposiciones de derecho internacional privado aplicables a relaciones comerciales y corporativas B2B.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>11. Divisibilidad y Validez (Severability)</h2>
            <p>
              Si cualquier cláusula, disposición o parte de estos Términos fuera declarada nula, inválida o inaplicable por un tribunal o autoridad competente, dicha declaración no afectará la validez y exigibilidad de las restantes estipulaciones, las cuales permanecerán en pleno vigor y efecto.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Modificaciones y Contacto Legal</h2>
            <p>
              CYL se reserva el derecho de modificar o actualizar estos Términos en cualquier momento para reflejar adaptaciones operativas, técnicas o normativas. La versión vigente estará permanentemente disponible en esta página indicando la fecha de última revisión.
            </p>
            <div className={styles.calloutBox}>
              <div className={styles.calloutTitle}>
                <span className="material-symbols-outlined">gavel</span>
                Contacto Legal
              </div>
              <p>
                Para cualquier notificación legal, solicitud de aclaración o consulta referente a estos Términos y Condiciones, puede dirigirse por escrito a nuestro correo corporativo:{' '}
                <a href="mailto:cyl.latams@gmail.com" className={styles.legalLink}>cyl.latams@gmail.com</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

