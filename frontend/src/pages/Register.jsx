import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import ScrollReveal from '../components/ScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import translations from '../i18n/translations';
import './Register.css';

const Register = () => {
    const { t } = useLanguage();
    const tr = translations.registerPage;
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (formData.password !== formData.password_confirmation) {
            setError(t(tr.errorMismatch));
            setLoading(false);
            return;
        }

        try {
            await registerUser(formData);
            // Redirect to login page
            navigate('/connexion', { state: { message: t(tr.successMsg) } });
        } catch (err) {
            console.error('Registration error:', err);
            if (err.response) {
                if (err.response.status === 422 && err.response.data?.errors) {
                    const firstError = Object.values(err.response.data.errors)[0][0];
                    setError(firstError);
                } else if (err.response.status === 500) {
                    setError(t(tr.errorServer));
                } else {
                    setError(t({ fr: 'Une erreur est survenue (', ar: 'حدث خطأ (' }) + err.response.status + ')');
                }
            } else if (err.request) {
                setError(t({ fr: 'Impossible de contacter le serveur.', ar: 'تعذر الاتصال بالخادم.' }));
            } else {
                setError(t(tr.errorGeneric));
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <ScrollReveal direction="up" className="register-card visible">
                    <div className="register-header">
                        <div className="cabinet-logo">
                            <img src="/logo.png" alt="Cabinet Hannit" style={{ width: '60px', height: '60px' }} />
                        </div>
                        <h2>{t(tr.title)}</h2>
                        <p>{t(tr.subtitle)}</p>
                    </div>

                    {error && (
                        <div className="alert alert-error">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleRegister} className="register-form">
                        <div className="form-group">
                            <label htmlFor="name">{t(tr.nameLabel)}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder={t(tr.placeholderName)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t(tr.emailLabel)}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder={t(tr.placeholderEmail)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">{t(tr.passwordLabel)}</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-input"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder={t(tr.placeholderPassword)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password_confirmation">{t(tr.confirmPasswordLabel)}</label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                className="form-input"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required
                                placeholder={t(tr.placeholderPassword)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" style={{ width: '100%', height: '52px' }} disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-small" style={{ marginRight: '10px' }}></span>
                                    {t(tr.registering)}
                                </>
                            ) : t(tr.registerBtn)}
                        </button>
                    </form>

                    <div className="register-footer">
                        <p>{t(tr.hasAccount)} <Link to="/connexion">{t(tr.loginLink)}</Link></p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Register;
