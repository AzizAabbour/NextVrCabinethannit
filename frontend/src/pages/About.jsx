import React from 'react';
import PageHeader from '../components/PageHeader';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './About.css';

const About = () => {
    const { t } = useLanguage();
    const tr = translations.about;
    const common = translations.common;

    return (
        <div className="about-page">
            <PageHeader
                title={t(tr.headerTitle)}
                subtitle={t(tr.headerSub)}
                breadcrumb={[
                    { label: t(common.home), link: '/' },
                    { label: t(tr.headerTitle) }
                ]}
            />

            {/* Intro Section */}
            <section className="section about-intro">
                <div className="container">
                    <div className="about-intro-grid">
                        <ScrollReveal direction="left" className="about-intro-content">
                            <span className="section-subtitle">{t(tr.introSubtitle)}</span>
                            <h2 className="section-title">{t(tr.introTitle)}</h2>
                            <p className="lead-text">
                                {t(tr.introLead)}
                            </p>
                            <p>
                                {t(tr.description)}
                            </p>
                            <p>
                                {t(tr.description2)}
                            </p>
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={0.2} className="about-intro-image">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=700&fit=crop"
                                alt="Cabinet Hannit Salle de Soin"
                                className="rounded-image shadow-lg"
                            />
                            <div className="about-badge">
                                <span className="badge-year">{t(tr.badgeYear)}</span>
                                <span className="badge-text">{t(tr.badgeText)}</span>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section vision-section visible">
                <div className="container">
                    <div className="vision-grid">
                        {[
                            {
                                icon: <path d="M2 12h5l3 5 3-9 3 5h5M22 12h-2" />,
                                title: t(tr.missionTitle),
                                desc: t(tr.missionDesc)
                            },
                            {
                                icon: <React.Fragment><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></React.Fragment>,
                                title: t(tr.visionTitle),
                                desc: t(tr.visionDesc)
                            },
                            {
                                icon: <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />,
                                title: t(tr.valuesTitle),
                                desc: t(tr.valuesDesc)
                            }
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.2} className="vision-card">
                                <div className="vision-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        {item.icon}
                                    </svg>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values/Why Choose Us */}
            <section className="section values-section visible">
                <div className="container">
                    <ScrollReveal className="section-header">
                        <span className="section-subtitle">{t(tr.whyChooseUs)}</span>
                        <h2 className="section-title">{t(tr.whyChooseUsTitle)}</h2>
                    </ScrollReveal>

                    <div className="values-grid">
                        {tr.reasons.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.2} className="value-item">
                                <div className="value-image">
                                    <img 
                                        src={
                                            i === 0 ? 'https://images.unsplash.com/photo-1576091160550-2187d80a18f7?w=500&h=350&fit=crop' :
                                            i === 1 ? 'https://images.unsplash.com/photo-1516549655169-df83a25a836b?w=500&h=350&fit=crop' :
                                            'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=350&fit=crop'
                                        } 
                                        alt={t(item.title)} 
                                    />
                                </div>
                                <div className="value-content">
                                    <h3>{t(item.title)}</h3>
                                    <p>{t(item.desc)}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
