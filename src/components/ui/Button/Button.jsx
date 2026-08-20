import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = 'primary', className = '', type = 'button', ...props }) => {
  const baseClass = styles.btn;
  const variantClass = styles[`btn-${variant}`];
  const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
