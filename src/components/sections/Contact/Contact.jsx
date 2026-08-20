import React, { useState } from 'react';
import Button from '../../ui/Button/Button';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = '584246676099';

const Contact = () => {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return;
    }

    const message = `¡Hola! Me gustaría solicitar una consultoría con CYL.

*Datos de contacto:*
• *Empresa:* ${formData.company.trim()}
• *Correo:* ${formData.email.trim()}
• *Teléfono / WhatsApp:* ${formData.phone.trim()}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`section-dark ${styles.contactSection}`} id="contact">
      <div className={styles.bgImage}>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRgFjU236jOsUNgN-EXChx_moNhuw3TVbDD-ycsYPFIpkhBOEOxHaXoWE_8LRGEzjUZEacSx5qlBsY-yYFNkB4Xfij3KnKZTqJKloaTJB29EI7usDR06KRjpTP8WVjTovCDKkdpc_ryHknKOnrpauyv_SazB_fGBf9Dm2fX8nUb41WuE5fK63gtE5wEA7pDpbYcs0_l2XI7tnSg4VOv6CoW6R5ckfzjIm4oL16Yx0AW1oOJKsuehPJxN6ljTY_W8aYD6-8vjjGZ6z"
          alt="Background"
        />
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
              <input
                type="text"
                name="company"
                placeholder="Nombre de Empresa"
                required
                value={formData.company}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Correo Corporativo"
                required
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono / WhatsApp"
                required
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
            <Button variant="primary" type="submit" className={styles.submitBtn}>
              Solicitar Consultoría
              <span className="material-symbols-outlined">event_available</span>
            </Button>
          </form>

          <p className={styles.disclaimer}>Cupos limitados por mes para asegurar calidad de servicio.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
