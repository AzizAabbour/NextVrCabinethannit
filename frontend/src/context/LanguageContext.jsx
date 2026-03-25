import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'cabinet_hannit_lang';

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved === 'ar' ? 'ar' : 'fr';
        } catch {
            return 'fr';
        }
    });

    const setLanguage = useCallback((lang) => {
        const validLang = lang === 'ar' ? 'ar' : 'fr';
        setLanguageState(validLang);
        try {
            localStorage.setItem(STORAGE_KEY, validLang);
        } catch (e) {
            // localStorage not available
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === 'fr' ? 'ar' : 'fr');
    }, [language, setLanguage]);

    // Helper: t(key) where key is an object { fr: '...', ar: '...' }
    const t = useCallback((obj) => {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[language] || obj.fr || '';
    }, [language]);

    // Set dir and lang on <html>
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, translations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
