import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import styles from './Contact.module.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to Cloudflare Worker endpoint
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito!");
      setLoading(false);
    }, 1500);
  };

  return (
    <section className={`section-dark ${styles.contactSection}`} id="contact">
      <div className={styles.bgImage}>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRgFjU236jOsUNgN-EXChx_moNhuw3TVbDD-ycsYPFIpkhBOEOxHaXoWE_8LRGEzjUZEacSx5qlBsY-yYFNkB4Xfij3KnKZTqJKloaTJB29EI7usDR06KRjpTP8WVjTovCDKkdpc_ryHknKOnrpauyv_SazB_fGBf9Dm2fX8nUb41WuE5fK63gtE5wEA7pDpbYcs0_l2XI7tnSg4VOv6CoW6R5ckfzjIm4oL16Yx0AW1oOJKsuehPJxN6ljTY_W8aYD6-8vjjGZ6z" alt="Background" />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.contactContainer}`}>
        <div className={`${styles.formCard} reveal-up`}>
          <span className={`material-symbols-outlined ${styles.icon}`}>business_center</span>
          <h2>Inicia la Transformación</h2>
          <p className={styles.subtitle}>
            Programa una sesión consultiva gratuita de 30 minutos. Analizaremos tu situación actual y delinearemos un roadmap preliminar de alto impacto.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Nombre de Empresa" required className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Correo Corporativo" required className={styles.input} />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" placeholder="Teléfono / WhatsApp" required className={styles.input} />
            </div>
            <Button variant="primary" className={styles.submitBtn}>
              {loading ? 'Enviando...' : (
                <>
                  Solicitar Consultoría
                  <span className="material-symbols-outlined">event_available</span>
                </>
              )}
            </Button>
          </form>
          
          <p className={styles.disclaimer}>Cupos limitados por mes para asegurar calidad de servicio.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
