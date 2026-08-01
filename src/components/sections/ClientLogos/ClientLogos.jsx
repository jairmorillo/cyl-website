import React from 'react';
import styles from './ClientLogos.module.css';

const logos = [
  { name: 'TechCorp', icon: 'domain' },
  { name: 'Nexus Systems', icon: 'hub' },
  { name: 'Apex Logistics', icon: 'local_shipping' },
  { name: 'Vertex Labs', icon: 'science' },
  { name: 'Nova Solutions', icon: 'insights' },
  { name: 'Global Tech', icon: 'language' }
];

const ClientLogos = () => {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.label}>
        <span>Empresas que confían en nosotros</span>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <span className={`material-symbols-outlined ${styles.icon}`}>{logo.icon}</span>
              <span className={styles.name}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
