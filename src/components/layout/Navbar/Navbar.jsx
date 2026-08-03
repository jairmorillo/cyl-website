import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `${styles.navbar} ${isScrolled ? styles.scrolled : ''}`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getNavHref = (hash) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <header className={navClasses}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link to="/" onClick={closeMobileMenu}>
            <img 
              src={isScrolled ? "/white-logo.png" : "/blue-logo.png"} 
              alt="CYL Consultoría Logo" 
              className={styles.logoImg}
            />
          </Link>
        </div>

        <button 
          className={styles.hamburgerBtn} 
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <Link to="/nosotros" onClick={closeMobileMenu}>Nosotros</Link>
          <a href={getNavHref('#services')} onClick={closeMobileMenu}>Servicios</a>
          <a href={getNavHref('#portafolio')} onClick={closeMobileMenu}>Portafolio</a>
          <a href={getNavHref('#benefits')} onClick={closeMobileMenu}>Impacto</a>
          <a href={getNavHref('#resenas')} onClick={closeMobileMenu}>Reseñas</a>
          <a href={getNavHref('#contact')} className={styles.ctaButton} onClick={closeMobileMenu}>Agenda tu consultoría</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
