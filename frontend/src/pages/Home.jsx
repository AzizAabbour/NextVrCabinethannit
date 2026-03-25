import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './Home.css';

/* ── Inline SVG Icons ── */
const icons = {
    trauma: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
        </svg>
    ),
    rhuma: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
        </svg>
    ),
    neuro: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    ),
    kine: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" />
        </svg>
    ),
    physio: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
    ),
    amincissement: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
    ),
    phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    check: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    ),
    clock: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    location: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
    ),
    star: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
};

const serviceIcons = [icons.amincissement, icons.physio, icons.kine, icons.trauma, icons.rhuma, icons.neuro];
const specialtyIcons = [icons.trauma, icons.rhuma, icons.neuro];

const Home = () => {
    const { t, language } = useLanguage();
    const tr = translations;

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [openFaq, setOpenFaq] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % tr.testimonials.items.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % tr.testimonials.items.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + tr.testimonials.items.length) % tr.testimonials.items.length);
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextTestimonial();
        } else if (isRightSwipe) {
            prevTestimonial();
        }
    };

    const heroImage = `${import.meta.env.BASE_URL}hero.jpeg`;

    return (
        <div className="home-page">
            {/* ════════ Hero Section ════════ */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-pattern"></div>
                    <div className="hero-gradient-orb hero-orb-1"></div>
                    <div className="hero-gradient-orb hero-orb-2"></div>
                    <div className="hero-gradient-orb hero-orb-3"></div>
                </div>

                <div className="container hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text"
                    >
                        <div className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            {t(tr.hero.badge)}
                        </div>
                        <h1 className="hero-title">
                            Cabinet <span className="gradient-text">Hannit</span>
                            <br />
                            <span className="hero-title-sub">{t(tr.hero.titleSub)}</span>
                        </h1>
                        <p className="hero-description">
                            {t(tr.hero.description)}
                        </p>
                        <div className="hero-actions">
                            <Link to="/rendez-vous" className="btn btn-primary btn-lg" id="hero-appointment-btn">
                                {t(tr.hero.appointmentBtn)}
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                            <Link to="/services" className="btn btn-secondary btn-lg" id="hero-services-btn">
                                {t(tr.hero.servicesBtn)}
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="hero-visual"
                    >
                        <div className="hero-visual-container">
                            <TiltCard className="hero-image-wrapper">
                                <img
                                    src={heroImage}
                                    alt="Cabinet de kinésithérapie moderne"
                                    className="hero-image"
                                    style={{ transform: 'translateZ(20px)' }}
                                />
                                <div className="hero-floating-card hero-card-1" style={{ transform: 'translateZ(120px)' }}>
                                    <div className="floating-card-icon">{icons.check}</div>
                                    <div>
                                        <strong>+2000</strong>
                                        <span>{t(tr.hero.patients)}</span>
                                    </div>
                                </div>
                                <div className="hero-floating-card hero-card-2" style={{ transform: 'translateZ(150px)' }}>
                                    <div className="floating-card-icon accent">{icons.clock}</div>
                                    <div>
                                        <strong>{t(tr.hero.since)}</strong>
                                        <span>{t(tr.hero.atService)}</span>
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </motion.div>
                </div>

                {/* Specialty cards */}
                <div className="container">
                    <div className="hero-specialties">
                        {tr.specialties.map((spec, i) => (
                            <ScrollReveal key={i} delay={0.2 * i}>
                                <TiltCard className="specialty-card">
                                    <div className="specialty-icon" style={{ transform: 'translateZ(40px)' }}>{specialtyIcons[i]}</div>
                                    <h3 className="specialty-title" style={{ transform: 'translateZ(30px)' }}>{t(spec.title)}</h3>
                                    <p className="specialty-desc" style={{ transform: 'translateZ(20px)' }}>{t(spec.desc)}</p>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ About Preview Section ════════ */}
            <section className="section about-preview visible">
                <div className="container">
                    <div className="about-grid">
                        <ScrollReveal direction="left" className="about-images">
                            <TiltCard className="about-img-main">
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=600&fit=crop"
                                    alt="Cabinet Hannit intérieur"
                                    style={{ transform: 'translateZ(20px)' }}
                                />
                            </TiltCard>
                            <TiltCard className="about-img-secondary">
                                <img
                                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=300&h=350&fit=crop"
                                    alt="Soins de kinésithérapie"
                                    style={{ transform: 'translateZ(30px)' }}
                                />
                            </TiltCard>
                            <div className="about-experience-badge">
                                <span className="experience-number">8+</span>
                                <span className="experience-text">{t(tr.about.experience)}</span>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={0.2} className="about-content">
                            <span className="section-subtitle">{t(tr.about.subtitle)}</span>
                            <h2 className="section-title">{t(tr.about.title)}</h2>
                            <p className="about-highlight">
                                {t(tr.about.highlight)}
                            </p>
                            <p className="about-description">
                                {t(tr.about.description)}
                            </p>
                            <ul className="about-features">
                                {tr.about.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="feature-icon">{icons.check}</span>
                                        {t(feature)}
                                    </li>
                                ))}
                            </ul>
                            <Link to="/a-propos" className="btn btn-primary" id="home-about-btn">
                                {t(tr.about.learnMore)}
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ════════ Stats Section ════════ */}
            <section className="stats-section visible">
                <div className="container">
                    <div className="stats-grid">
                        {tr.stats.map((stat, i) => (
                            <ScrollReveal key={i} delay={i * 0.1} className="stat-item visible">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{t(stat.label)}</span>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ Services Section ════════ */}
            <section className="section services-section visible">
                <div className="container">
                    <ScrollReveal className="section-header">
                        <span className="section-subtitle">{t(tr.services.subtitle)}</span>
                        <h2 className="section-title">{t(tr.services.title)}</h2>
                        <p className="section-description">
                            {t(tr.services.description)}
                        </p>
                    </ScrollReveal>

                    <div className="services-grid">
                        {tr.services.items.map((service, i) => (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.1}
                                className="visible"
                            >
                                <TiltCard className="service-card card">
                                    <div className="service-card-icon" style={{ transform: 'translateZ(50px)' }}>{serviceIcons[i]}</div>
                                    <h3 className="service-card-title" style={{ transform: 'translateZ(40px)' }}>{t(service.title)}</h3>
                                    <p className="service-card-desc" style={{ transform: 'translateZ(30px)' }}>{t(service.desc)}</p>
                                    <Link to="/services" className="service-card-link" style={{ transform: 'translateZ(20px)' }}>
                                        {t(tr.services.learnMore)}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </Link>
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Emergency CTA */}
                    <div className="emergency-cta">
                        <a href="tel:+212644574537" className="emergency-link">
                            {icons.phone}
                            <div>
                                <span className="emergency-number">+212 644 574 537</span>
                                <span className="emergency-text">{t(tr.services.emergency)}</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* ════════ Testimonials Section ════════ */}
            <section className="section testimonials-section visible">
                <div className="container">
                    <ScrollReveal className="section-header">
                        <span className="section-subtitle">{t(tr.testimonials.subtitle)}</span>
                        <h2 className="section-title">{t(tr.testimonials.title)}</h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} className="testimonials-carousel-wrapper">
                        <div
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div className="testimonials-carousel" style={{ transform: `translateX(${language === 'ar' ? '' : '-'}${currentTestimonial * 100}%)` }}>
                                {tr.testimonials.items.map((tItem, i) => (
                                    <div key={i} className="testimonial-slide">
                                        <div className="testimonial-card card">
                                            <div className="testimonial-stars">
                                                {Array.from({ length: tItem.rating }, (_, j) => (
                                                    <span key={j} className="star">{icons.star}</span>
                                                ))}
                                            </div>
                                            <p className="testimonial-text">"{t(tItem.text)}"</p>
                                            <div className="testimonial-author">
                                                <div className="testimonial-avatar">{tItem.name.charAt(0)}</div>
                                                <div className="testimonial-meta">
                                                    <span className="testimonial-name">{tItem.name}</span>
                                                    <span className="testimonial-status">{t(tr.testimonials.verified)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="carousel-controls">
                                <button className="carousel-btn prev" onClick={prevTestimonial} aria-label="Previous">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6" />
                                    </svg>
                                </button>
                                <button className="carousel-btn next" onClick={nextTestimonial} aria-label="Next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </button>
                            </div>

                            <div className="carousel-dots">
                                {tr.testimonials.items.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`dot ${currentTestimonial === i ? 'active' : ''}`}
                                        onClick={() => setCurrentTestimonial(i)}
                                        aria-label={`Testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ════════ Working Hours Section ════════ */}
            <section className="section hours-section visible">
                <div className="container">
                    <div className="hours-grid">
                        <ScrollReveal direction="left" className="hours-content">
                            <span className="section-subtitle">{t(tr.hours.subtitle)}</span>
                            <h2 className="section-title">{t(tr.hours.title)}</h2>
                            <p className="hours-description">
                                {t(tr.hours.description)}
                            </p>
                            <div className="hours-list">
                                {tr.hours.days.map((item, i) => (
                                    <div key={i} className={`hours-row ${item.closed ? 'closed' : ''}`}>
                                        <span className="hours-day">{t(item.day)}</span>
                                        <span className="hours-dots"></span>
                                        <span className="hours-time">{typeof item.hours === 'object' ? t(item.hours) : item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={0.2} className="hours-info">
                            <div className="info-card">
                                <div className="info-card-icon">{icons.location}</div>
                                <h4>{t(tr.hours.address)}</h4>
                                <p>32, Bd Chefchaouni, Résidence Dar Dounia, 1er Étage, App N°3, Casablanca</p>
                            </div>
                            <div className="info-card">
                                <div className="info-card-icon">{icons.phone}</div>
                                <h4>{t(tr.hours.phone)}</h4>
                                <p><a href="tel:+212644574537">+212 644 574 537</a></p>
                                <p><a href="tel:+212522342569">+212 522 342 569</a></p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ════════ FAQ Section ════════ */}
            <section className="section faq-section visible">
                <div className="container">
                    <ScrollReveal className="section-header">
                        <span className="section-subtitle">{t(tr.faq.subtitle)}</span>
                        <h2 className="section-title">{t(tr.faq.title)}</h2>
                    </ScrollReveal>
                    <div className="faq-list">
                        {tr.faq.items.map((faq, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                                    <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                        <span>{t(faq.q)}</span>
                                        <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{t(faq.a)}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ CTA Section ════════ */}
            <section className="cta-section visible">
                <div className="cta-bg">
                    <div className="cta-pattern"></div>
                </div>
                <ScrollReveal className="container cta-content">
                    <h2 className="cta-title">{t(tr.cta.title)}</h2>
                    <p className="cta-subtitle">{t(tr.cta.subtitle)}</p>
                    <div className="cta-actions">
                        <Link to="/rendez-vous" className="btn btn-white btn-lg" id="home-cta-appointment">
                            {t(tr.cta.appointment)}
                        </Link>
                        <a href="tel:+212644574537" className="btn btn-outline-white btn-lg">
                            {icons.phone}
                            {t(tr.cta.callUs)}
                        </a>
                    </div>
                </ScrollReveal>
            </section>
        </div >
    );
};

export default Home;
