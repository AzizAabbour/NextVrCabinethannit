import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { sendContactMessage } from '../services/api';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './Contact.css';

const Contact = () => {
    const { t } = useLanguage();
    const tr = translations.contact;
    const common = translations.common;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    React.useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setFormData(prev => ({
                ...prev,
                name: user.name || '',
                email: user.email || '',
                phone: user.phone || ''
            }));
        }
    }, []);

    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await sendContactMessage(formData);
            setStatus({
                type: 'success',
                message: t(tr.successMsg)
            });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus({
                type: 'error',
                message: t(tr.errorMsg)
            });
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: t(tr.addressTitle),
            content: '32, Bd Chefchaouni, Résidence Dar Dounia, 1er Étage, App N°3, Casablanca'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: t(tr.phoneTitle),
            content: '+212 644 574 537',
            link: 'tel:+212644574537'
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: t(tr.emailTitle),
            content: 'contact@cabinethannit.ma',
            link: 'mailto:contact@cabinethannit.ma'
        }
    ];

    return (
        <div className="contact-page">
            <PageHeader
                title={t(tr.headerTitle)}
                subtitle={t(tr.headerSub)}
                breadcrumb={[
                    { label: t(common.home), link: '/' },
                    { label: t(common.contact) }
                ]}
            />

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <ScrollReveal direction="left" className="contact-info visible">
                            <span className="section-subtitle">{t(tr.subtitle)}</span>
                            <h2 className="section-title">{t(tr.title)}</h2>
                            <p className="contact-description">
                                {t(tr.description)}
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="contact-item">
                                        <div className="contact-icon">{info.icon}</div>
                                        <div className="contact-text">
                                            <h4>{info.title}</h4>
                                            {info.link ? (
                                                <a href={info.link}>{info.content}</a>
                                            ) : (
                                                <p>{info.content}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.5678!2d-7.6!3d33.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzAwLjAiTiA3wrAzNicwMC4wIlc!5e0!3m2!1sen!2sma!4v1620000000000!5m2!1sen!2sma"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title={t(tr.mapTitle)}
                                ></iframe>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal direction="right" delay={0.2} className="contact-form-wrapper card visible">
                            <h3>{t(tr.formTitle)}</h3>
                            {status.message && (
                                <div className={`alert alert-${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">{t(tr.formLabelName)}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t(tr.formPlaceholderName)}
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">{t(tr.formLabelEmail)}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t(tr.formPlaceholderEmail)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">{t(tr.formLabelPhone)}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t(tr.formPlaceholderPhone)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject" className="form-label">{t(tr.formLabelSubject)}</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder={t(tr.formPlaceholderSubject)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">{t(tr.formLabelMessage)}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t(tr.formPlaceholderMessage)}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    {loading ? t(common.sending) : t(tr.submitBtn)}
                                </button>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
