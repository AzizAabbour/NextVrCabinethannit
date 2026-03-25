import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { createAppointment } from '../services/api';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './Appointment.css';

const Appointment = () => {
    const { t } = useLanguage();
    const tr = translations.appointment;
    const common = translations.common;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
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
            await createAppointment(formData);
            setStatus({
                type: 'success',
                message: t(tr.successMsg)
            });
            setFormData({
                name: '', email: '', phone: '', service: '',
                date: '', time: '', message: ''
            });
        } catch (error) {
            console.error('Error booking appointment:', error);
            setStatus({
                type: 'error',
                message: t(tr.errorMsg)
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="appointment-page">
            <PageHeader
                title={t(tr.headerTitle)}
                subtitle={t(tr.headerSub)}
                breadcrumb={[
                    { label: t(common.home), link: '/' },
                    { label: t(common.appointment) }
                ]}
            />

            <section className="section appointment-section">
                <div className="container">
                    <div className="appointment-grid">
                        {/* Intro Content */}
                        <ScrollReveal direction="left" className="appointment-intro visible">
                            <span className="section-subtitle">{t(tr.subtitle)}</span>
                            <h2 className="section-title">{t(tr.title)}</h2>
                            <p className="lead-text">
                                {t(tr.lead)}
                            </p>

                            <div className="appointment-steps">
                                <div className="step-item">
                                    <span className="step-number">1</span>
                                    <h4>{t(tr.step1Title)}</h4>
                                    <p>{t(tr.step1Desc)}</p>
                                </div>
                                <div className="step-item">
                                    <span className="step-number">2</span>
                                    <h4>{t(tr.step2Title)}</h4>
                                    <p>{t(tr.step2Desc)}</p>
                                </div>
                                <div className="step-item">
                                    <span className="step-number">3</span>
                                    <h4>{t(tr.step3Title)}</h4>
                                    <p>{t(tr.step3Desc)}</p>
                                </div>
                            </div>

                            <div className="appointment-info-box">
                                <h4>{t(tr.openingHours)}</h4>
                                <ul className="info-hours">
                                    <li><span>{t(translations.hours.days[0].day)} - {t(translations.hours.days[4].day)}:</span> <strong>09:00 - 18:00</strong></li>
                                    <li><span>{t(translations.hours.days[5].day)}:</span> <strong>10:00 - 15:00</strong></li>
                                    <li><span>{t(translations.hours.days[6].day)}:</span> <strong>{t(translations.hours.days[6].hours)}</strong></li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Booking Form */}
                        <ScrollReveal direction="right" delay={0.2} className="appointment-form-card card visible">
                            <form onSubmit={handleSubmit}>
                                <h3 className="form-title">{t(tr.formTitle)}</h3>

                                {status.message && (
                                    <div className={`alert alert-${status.type}`}>
                                        {status.message}
                                    </div>
                                )}

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">{t(common.name)} *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-input"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t(translations.contact.formPlaceholderName)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">{t(common.phone)} *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-input"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t(translations.contact.formPlaceholderPhone)}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">{t(common.email)}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder={t(translations.contact.formPlaceholderEmail)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="service" className="form-label">{t(tr.formServiceLabel)}</label>
                                        <select
                                            id="service"
                                            name="service"
                                            className="form-select"
                                            required
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">{t(tr.formSelectService)}</option>
                                            {tr.services.map((s, i) => (
                                                <option key={i} value={t(s)}>{t(s)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="date" className="form-label">{t(tr.formDateLabel)}</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            className="form-input"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="time" className="form-label">{t(tr.formTimeLabel)}</label>
                                        <input
                                            type="time"
                                            id="time"
                                            name="time"
                                            className="form-input"
                                            value={formData.time}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">{t(tr.formMessageLabel)}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t(tr.formMessagePlaceholder)}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    {loading ? t(common.sending) : t(tr.submitBtn)}
                                </button>
                                <p className="form-note">{t(common.requiredFields)}</p>
                            </form>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
