import React from 'react';
import styles from './ClientLogos.module.css';

const clientLogos = [
  { name: 'Florida Quality Roof Solution', src: '/client-logos/fq-roofing.png' },
  { name: 'DNA Roofing LLC', src: '/client-logos/dna-roofing.png' },
  { name: 'RZ Agentes Aduanales', src: '/client-logos/rz-aduanales.png' },
  { name: 'My Steps App', src: '/client-logos/my-steps.png' },
  { name: 'Inleonca', src: '/client-logos/inleonca.png' }
];

const ClientLogos = () => {
  return (
    <section className={styles.marqueeSection}>
      <div className={styles.label}>
        <span>Empresas que confían en nosotros</span>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.src} alt={logo.name} className={styles.logoImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
