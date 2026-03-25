import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './PageHeader.css';

/**
 * PageHeader - Reusable page header/banner with gradient background
 * Enhanced with i18n and RTL support
 */
const PageHeader = ({ title, subtitle, breadcrumb }) => {
    const { language } = useLanguage();

    return (
        <section className="page-header" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="page-header-bg">
                <div className="page-header-pattern"></div>
                <div className="page-header-overlay"></div>
            </div>
            <div className="container page-header-content">
                {breadcrumb && (
                    <div className="page-breadcrumb animate-fadeInDown">
                        {breadcrumb.map((item, i) => (
                            <span key={i}>
                                {i > 0 && <span className="breadcrumb-separator">/</span>}
                                {item.link ? (
                                    <Link to={item.link} className="breadcrumb-link">{item.label}</Link>
                                ) : (
                                    <span className="breadcrumb-current">{item.label}</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}
                <h1 className="page-header-title animate-fadeInUp" style={{ textAlign: language === 'ar' ? 'right' : 'inherit' }}>{title}</h1>
                {subtitle && (
                    <p className="page-header-subtitle animate-fadeInUp delay-2" style={{ textAlign: language === 'ar' ? 'right' : 'inherit' }}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHeader;
