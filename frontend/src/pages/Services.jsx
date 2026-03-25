import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './Services.css';

const Services = () => {
    const { t } = useLanguage();
    const tr = translations.services;
    const common = translations.common;

    const icons = [
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />,
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
        <path d="M18 20V10" />,
        <React.Fragment><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></React.Fragment>,
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    ];

    // Some specific icon layouts need special adjustments
    const getIcon = (index) => {
        if (index === 0) return (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6" /><path d="M23 11h-6" />
            </svg>
        );
        if (index === 3) return (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
            </svg>
        );
        
        return (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {icons[index]}
            </svg>
        );
    };

    return (
        <div className="services-page">
            <PageHeader
                title={t(tr.headerTitle)}
                subtitle={t(tr.headerSub)}
                breadcrumb={[
                    { label: t(common.home), link: '/' },
                    { label: t(tr.subtitle) }
                ]}
            />

            <section className="section services-list-section">
                <div className="container">
                    <div className="services-list-grid">
                        {tr.items.map((service, index) => (
                            <ScrollReveal
                                key={service.id}
                                delay={index * 0.1}
                                className="service-item card visible"
                            >
                                <div className="service-icon-wrapper">
                                    {getIcon(index)}
                                </div>
                                <div className="service-content">
                                    <h3 className="service-title">{t(service.title)}</h3>
                                    <p className="service-description">{t(service.desc)}</p>
                                    <ul className="service-features">
                                        {service.features.map((feature, i) => (
                                            <li key={i}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {t(feature)}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/rendez-vous" className="btn btn-secondary service-btn">
                                        {t(tr.appointmentBtn)}
                                    </Link>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <ScrollReveal className="service-cta">
                <div className="container">
                    <div className="service-cta-content">
                        <h2>{t(tr.ctaTitle)}</h2>
                        <p>{t(tr.ctaText)}</p>
                        <Link to="/contact" className="btn btn-white">{t(tr.contactLink)}</Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default Services;
