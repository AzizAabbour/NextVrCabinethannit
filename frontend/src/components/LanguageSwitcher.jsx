import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

/**
 * LanguageSwitcher - Elegant FR/AR language toggle
 * Professional pill-style switcher with smooth animations
 */
const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const switcherRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (switcherRef.current && !switcherRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages = [
        { code: 'fr', label: 'FR', fullName: 'Français', flag: '🇫🇷' },
        { code: 'ar', label: 'AR', fullName: 'العربية', flag: '🇲🇦' },
    ];

    const currentLang = languages.find(l => l.code === language);
    const otherLang = languages.find(l => l.code !== language);

    const handleSelect = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };

    return (
        <div className="lang-switcher" ref={switcherRef} id="language-switcher">
            {/* Toggle Button */}
            <button
                className={`lang-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Switch language"
                aria-expanded={isOpen}
                id="lang-toggle-btn"
            >
                <span className="lang-toggle-flag">{currentLang.flag}</span>
                <span className="lang-toggle-code">{currentLang.label}</span>
                <svg
                    className="lang-toggle-chevron"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {/* Dropdown */}
            <div className={`lang-dropdown ${isOpen ? 'visible' : ''}`}>
                <div className="lang-dropdown-inner">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`lang-option ${language === lang.code ? 'active' : ''}`}
                            onClick={() => handleSelect(lang.code)}
                            id={`lang-option-${lang.code}`}
                        >
                            <span className="lang-option-flag">{lang.flag}</span>
                            <div className="lang-option-text">
                                <span className="lang-option-code">{lang.label}</span>
                                <span className="lang-option-name">{lang.fullName}</span>
                            </div>
                            {language === lang.code && (
                                <svg className="lang-option-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
