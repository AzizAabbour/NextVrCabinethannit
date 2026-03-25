import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GoToTop from './components/GoToTop';
import { useLanguage } from './context/LanguageContext';
import translations from './i18n/translations';
import SplashScreen from './components/SplashScreen';

// Lazy performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Doctors = lazy(() => import('./pages/Doctors'));
const Contact = lazy(() => import('./pages/Contact'));
const Appointment = lazy(() => import('./pages/Appointment'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));


const PageLoader = () => {
    const { t } = useLanguage();
    return (
        <div className="loading-overlay">
            <div style={{ textAlign: 'center' }}>
                <div className="spinner" style={{ margin: '0 auto 16px' }}></div>
                <p style={{ color: 'var(--primary)', fontWeight: 500 }}>{t(translations.loader.text)}</p>
            </div>
        </div>
    );
};

// Component to handle conditional rendering of common components
const AppContent = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');
    const { language } = useLanguage();

    // Effect to override direction/language on admin routes
    useEffect(() => {
        if (isAdminRoute) {
            document.documentElement.lang = 'fr';
            document.documentElement.dir = 'ltr';
        } else {
            // Restore context settings for public routes
            document.documentElement.lang = language;
            document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        }
    }, [isAdminRoute, language]);

    const [showSplash, setShowSplash] = React.useState(() => {
        return !sessionStorage.getItem('splash_shown');
    });

    const handleFinish = () => {
        setShowSplash(false);
        sessionStorage.setItem('splash_shown', 'true');
    };

    if (showSplash) {
        return <SplashScreen onFinish={handleFinish} />;
    }

    return (
        <div className="app animate-fadeIn">
            <ScrollToTop />
            {!isAdminRoute && <Navbar />}
            <main>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/a-propos" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/equipe" element={<Doctors />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/rendez-vous" element={<Appointment />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/connexion" element={<Login />} />
                        <Route path="/inscription" element={<Register />} />
                        <Route path="/dashboard" element={<UserDashboard />} />
                    </Routes>
                </Suspense>
            </main>
            {!isAdminRoute && <Footer />}
            {!isAdminRoute && <GoToTop />}
        </div>
    );
};

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
