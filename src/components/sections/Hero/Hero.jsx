import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../../ui/Button/Button';
import ParticlesBackground from '../../ui/ParticlesBackground/ParticlesBackground';
import TechNetwork3D from '../../ui/TechNetwork3D/TechNetwork3D';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 }); 
      
      tl.fromTo('.badge-anim', 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo('.letter-anim',
        { y: 30, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.6, stagger: 0.04, ease: 'back.out(1.5)' },
        '-=0.4'
      )
      .fromTo('.desc-anim',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.2'
      )
      .fromTo('.btn-anim',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(1.5)' },
        '-=0.4'
      )
      .fromTo('.img-anim',
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power4.out' },
        '-=0.8'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text, isGradient = false) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`letter-anim ${isGradient ? styles.textGradientLetter : ''}`} 
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section className={`section-light ${styles.hero}`} id="home" ref={heroRef}>
      <ParticlesBackground />
      
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.badge} badge-anim`}>
            <span className="material-symbols-outlined">rocket_launch</span>
            Consultoría Estratégica B2B
          </div>
          
          <h1 className={styles.title}>
            {splitText("Desbloquea el ")}
            <br />
            {splitText("Máximo Potencial", true)}
            <br />
            {splitText("de tu Empresa")}
          </h1>
          
          <p className={`${styles.subtitle} desc-anim`}>
            Soluciones tecnológicas y estratégicas diseñadas para escalar operaciones, optimizar procesos y multiplicar resultados con precisión institucional.
          </p>
          
          <div className={styles.actions}>
            <div className="btn-anim">
              <Button variant="primary" onClick={() => window.location.href='#contact'}>
                Agenda una consultoría gratuita
              </Button>
            </div>
            <div className="btn-anim">
              <Button variant="glass" onClick={() => window.location.href='#services'} className={styles.glassBtnDark}>
                Explorar Servicios
              </Button>
            </div>
          </div>
        </div>
        
        <div className={`${styles.heroImageContainer} img-anim`}>
          <TechNetwork3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;
