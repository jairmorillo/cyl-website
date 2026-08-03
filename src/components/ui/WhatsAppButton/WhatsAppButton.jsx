import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '584246676099';
  const defaultMessage = encodeURIComponent('Hola, me gustaría recibir más información sobre sus servicios de consultoría.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Contactar por WhatsApp"
    >
      <span className={styles.tooltip}>¿Hablamoss por WhatsApp?</span>
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.82.83 5.447 2.26 7.647L2.6 29.4l5.967-1.565A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm.006 25.666c-2.398 0-4.733-.642-6.772-1.858l-.485-.288-3.538.928.944-3.45-.317-.504C4.462 20.354 3.666 18.23 3.666 16c0-6.8 5.534-12.333 12.34-12.333 6.805 0 12.333 5.533 12.333 12.333 0 6.806-5.528 12.333-12.333 12.333zm6.757-9.213c-.37-.185-2.193-1.082-2.531-1.205-.339-.124-.586-.185-.833.185-.246.37-.954 1.205-1.17 1.452-.215.247-.431.278-.801.093-.37-.186-1.562-.576-2.976-1.837-1.1-1.006-1.843-2.248-2.059-2.618-.215-.37-.023-.57.162-.754.167-.166.37-.431.554-.647.185-.216.246-.37.37-.617.123-.247.062-.463-.031-.647-.093-.185-.833-2.004-1.141-2.744-.3-.72-.605-.623-.833-.635-.215-.011-.462-.011-.709-.011-.247 0-.647.093-.986.463-.339.37-1.3 1.27-1.3 3.097 0 1.826 1.33 3.593 1.515 3.84.185.247 2.617 3.997 6.34 5.604.886.383 1.578.612 2.118.783.89.283 1.7.243 2.34.148.714-.106 2.193-.896 2.501-1.761.308-.865.308-1.606.216-1.76-.093-.155-.339-.247-.709-.432z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
