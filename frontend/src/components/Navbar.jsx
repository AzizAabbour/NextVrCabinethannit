import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar - Professional responsive navigation with glassmorphism
 */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        const checkAuth = async () => {
            const token = localStorage.getItem('user_token');
            const storedUser = localStorage.getItem('user');

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else if (token) {
                try {
                    const apiModule = await import('../services/api');
                    if (apiModule.getUserProfile) {
                        const response = await apiModule.getUserProfile();
                        setUser(response.data);
                        localStorage.setItem('user', JSON.stringify(response.data));
                    }
                } catch (error) {
                    console.error("Failed to load user profile in Navbar", error);
                    if (error.response && error.response.status === 401) {
                        localStorage.removeItem('user_token');
                    }
                }
            }
        };

        checkAuth();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user_token');
        localStorage.removeItem('admin_token');
        localStorage.removeItem('user');
        window.location.href = '/connexion';
    };

    const navLinks = [
        { path: '/', label: 'Accueil' },
        { path: '/a-propos', label: 'À propos' },
        { path: '/services', label: 'Services' },
        { path: '/equipe', label: 'Équipe' },
        { path: '/contact', label: 'Contact' },
    ];

    // The dashboard link is moved to the actions section as a button in CTA

    const isAdmin = location.pathname.startsWith('/admin');
    if (isAdmin) return null; // Hide navbar on admin pages

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">

                <Link to="/" className="navbar-logo" id="navbar-logo">
                    <div className="logo-icon">
                        <img src="/logo.png" alt="Cabinet Hannit Logo" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className="logo-text">
                        <span className="logo-name">Cabinet Hannit</span>
                        <span className="logo-tagline">Kinésithérapie</span>
                    </div>
                </Link>

                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.path === '/dashboard' ? (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        Tableau de bord
                                    </span>
                                ) : link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button + Phone */}
                <div className="navbar-actions">
                    {user ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Link to="/dashboard" className="btn" style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 18px', borderRadius: '50px', fontWeight: '600', color: 'var(--primary)', backgroundColor: 'transparent', border: '1.5px solid var(--primary)', textDecoration: 'none', transition: 'all 0.3s' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                Tableau de bord
                            </Link>

                            {user.auth_provider === 'google' ? (
                                <button
                                    onClick={handleLogout}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 16px 6px 8px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600', color: '#334155', cursor: 'pointer', transition: 'all 0.3s' }}
                                    title="Se déconnecter"
                                    onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(194, 52, 100, 0.1)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                                >
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.name} style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} referrerPolicy="no-referrer" />
                                    ) : (
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </div>
                                    )}
                                    <span>{user.name}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                </button>
                            ) : (
                                <button onClick={handleLogout} className="btn btn-secondary nav-cta">
                                    Déconnexion
                                </button>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link to="/connexion" className="btn btn-secondary nav-cta">
                                Connexion
                            </Link>
                            <Link to="/rendez-vous" className="btn btn-primary nav-cta" id="nav-appointment-btn">
                                Rendez-vous
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="navbar-logo">
                        <div className="logo-icon">
                            <img src="/logo.png" alt="Cabinet Hannit Logo" style={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className="logo-text">
                            <span className="logo-name">Cabinet Hannit</span>
                            <span className="logo-tagline">Kinésithérapie</span>
                        </div>
                    </div>
                    <button className="mobile-close" onClick={() => setMenuOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <div className="mobile-menu-content">
                    <ul className="mobile-links">
                        {navLinks.map((link, i) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mobile-actions">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>
                                    Tableau de bord
                                </Link>
                                <button onClick={handleLogout} className="btn btn-secondary mobile-cta">
                                    Déconnexion
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/connexion" className="btn btn-secondary mobile-cta" onClick={() => setMenuOpen(false)}>
                                    Connexion
                                </Link>
                                <Link to="/rendez-vous" className="btn btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>
                                    Prendre Rendez-vous
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="mobile-footer">
                        <p className="mobile-footer-title">Contactez-nous</p>
                        <a href="tel:+212644574537" className="mobile-footer-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            +212 644 574 537
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay */}
            {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;
