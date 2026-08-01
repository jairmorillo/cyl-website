import React from 'react';
import './Button.module.css';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseClass = styles.btn;
  const variantClass = styles[`btn-${variant}`];
  const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
