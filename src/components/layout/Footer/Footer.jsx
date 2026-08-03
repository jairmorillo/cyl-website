import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <Link to="/">
          <img src="/white-logo.png" alt="CYL Consultoría Logo" className={styles.logoImg} />
        </Link>
      </div>
      
      <div className={styles.links}>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/privacidad">Privacidad</Link>
        <Link to="/terminos">Términos</Link>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
          LinkedIn <span className="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
      
      <div className={styles.copyright}>
        © 2026 Cordero y Leon, C.A. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
