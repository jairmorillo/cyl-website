import React, { useState, useEffect, useRef } from 'react';
import styles from './Reviews.module.css';

const reviewsData = [
  {
    name: 'Carlos Mendoza',
    role: 'Director de Operaciones, Apex Logistics',
    comment: 'CYL transformó por completo nuestra infraestructura tecnológica. Su equipo es rápido, profesional y con una visión de negocio impecable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Dra. Elena Ramos',
    role: 'Founder & CEO, MedPortal',
    comment: 'El desarrollo de nuestra aplicación médica superó todas nuestras expectativas de diseño, seguridad y rendimiento. 100% recomendados.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Javier Ríos',
    role: 'CFO, Nexus Systems',
    comment: 'La automatización de procesos redujo nuestros costos operativos significativamente en solo 3 meses. Una inversión de alto valor.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Ing. Roberto Valenzuela',
    role: 'VP de Tecnología, Florida Quality Roof',
    comment: 'La integración con Zoho CRM desarrollada por CYL duplicó nuestra capacidad de respuesta comercial en menos de un mes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    name: 'Lcda. Sofía Benítez',
    role: 'Gerente General, RZ Aduanales',
    comment: 'Impecable atención y solidez institucional. El portal web nos dio la presencia internacional que necesitábamos.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviewsData.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex, maxIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className={`section-light ${styles.reviewsSection}`} id="resenas">
      <div className={`container ${styles.container}`}>
        <div className={`${styles.header} reveal-up`}>
          <div className={styles.googleBadge}>
            <span className={styles.googleG}>G</span>
            <div className={styles.stars}>
              {'★'.repeat(5)}
            </div>
            <span className={styles.ratingText}>5.0 en Google Reviews</span>
          </div>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>La confianza corporativa se construye con resultados. Conoce la experiencia de quienes trabajan con nosotros.</p>
        </div>

        {/* Carousel Slider Wrapper */}
        <div 
          className={styles.sliderWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={prevSlide}
            aria-label="Anterior testimonio"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <div className={styles.sliderViewport}>
            <div 
              className={styles.sliderTrack} 
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` 
              }}
            >
              {reviewsData.map((review, index) => (
                <div key={index} className={styles.slideItem}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <img src={review.avatar} alt={review.name} className={styles.avatar} />
                      <div>
                        <h4 className={styles.name}>{review.name}</h4>
                        <p className={styles.role}>{review.role}</p>
                      </div>
                    </div>
                    <div className={styles.starsRow}>
                      {'★'.repeat(review.rating)}
                    </div>
                    <p className={styles.comment}>"{review.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={nextSlide}
            aria-label="Siguiente testimonio"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className={styles.dotsContainer}>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir a testimonio ${index + 1}`}
            />
          ))}
        </div>

        <div className={`${styles.ctaWrapper} reveal-up`}>
          <a
            href="https://search.google.com/local/writereview?placeid=sample"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleCtaBtn}
          >
            <span className={styles.googleIcon}>G</span>
            ¿Eres nuestro cliente? Déjanos tu reseña en Google
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
