import React, { useState, useEffect, useRef } from 'react';
import { getDashboardData, toggleServiceSelection, markReplyAsRead, deleteUserMessage, deleteUserAppointment } from '../services/api';
import './UserDashboard.css';
import { Link, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');
    const [showNotifications, setShowNotifications] = useState(false);
    const [expandedMessage, setExpandedMessage] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const [deletingApptId, setDeletingApptId] = useState(null);
    const notifRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const response = await getDashboardData();
                setData(response.data);
            } catch (err) {
                console.error("Error fetching dashboard data:", err);
                const detailedError = err.response?.data?.error || err.response?.data?.message || "";
                setError("Impossible de charger les données du tableau de bord. " + detailedError);
                if (err.response && err.response.status === 401) {
                    navigate('/connexion');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();

        const interval = setInterval(fetchDashboardData, 30000);

        return () => clearInterval(interval);
    }, [navigate]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleMarkReplyRead = async (msgId) => {
        try {
            await markReplyAsRead(msgId);
            setData(prev => ({
                ...prev,
                messages: prev.messages.map(msg =>
                    msg.id === msgId ? { ...msg, reply_read: true } : msg
                ),
                stats: {
                    ...prev.stats,
                    unread_replies: Math.max(0, prev.stats.unread_replies - 1)
                }
            }));
        } catch (err) {
            console.error("Error marking reply as read:", err);
        }
    };

    const handleDeleteMessage = async (msgId) => {
        if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) return;

        setDeletingId(msgId);
        try {
            await deleteUserMessage(msgId);
            setData(prev => ({
                ...prev,
                messages: prev.messages.filter(msg => msg.id !== msgId),
                stats: {
                    ...prev.stats,
                    total_messages: Math.max(0, prev.stats.total_messages - 1)
                }
            }));
            if (expandedMessage === msgId) setExpandedMessage(null);
        } catch (err) {
            console.error("Error deleting message:", err);
            alert("Une erreur est survenue lors de la suppression du message.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleDeleteAppointment = async (apptId) => {
        if (!window.confirm("Êtes-vous sûr de vouloir annuler et supprimer ce rendez-vous ?")) return;

        setDeletingApptId(apptId);
        try {
            await deleteUserAppointment(apptId);
            setData(prev => ({
                ...prev,
                appointments: prev.appointments.filter(app => app.id !== apptId),
                stats: {
                    ...prev.stats,
                    total_appointments: Math.max(0, prev.stats.total_appointments - 1)
                }
            }));
            // Update selected tab if all appointments are deleted
            if (data.appointments.length === 1 && activeTab === 'appointments') {
                 // Do nothing, just let it show empty state
            }
        } catch (err) {
            console.error("Error deleting appointment:", err);
            alert("Une erreur est survenue lors de la suppression du rendez-vous.");
        } finally {
            setDeletingApptId(null);
        }
    };

    if (loading) {
        return (
            <div className="user-dashboard">
                <div className="dashboard-container" style={{ textAlign: 'center', padding: '100px 0' }}>
                    <div className="spinner" style={{ margin: '0 auto 20px' }}></div>
                    <p>Chargement de votre espace personnel...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="user-dashboard">
                <div className="dashboard-container">
                    <div className="card" style={{ textAlign: 'center', borderTop: '4px solid var(--primary)', padding: '40px' }}>
                        <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Oups !</h2>
                        <div className="error-box" style={{ background: '#fff1f2', color: '#be123c', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fda4af' }}>
                            {error}
                        </div>
                        <button onClick={() => window.location.reload()} className="btn btn-primary">
                            Réessayer
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) return null;

    const { user, appointments, messages, selections, stats } = data;

    const unreadReplies = messages.filter(msg => msg.admin_reply && !msg.reply_read);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'appointments':
                return (
                    <div className="data-table-container">
                        {appointments.length > 0 ? (
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Service</th>
                                        <th>Date</th>
                                        <th>Heure</th>
                                        <th>Statut</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map(app => (
                                        <tr key={app.id}>
                                            <td>{app.service || 'N/A'}</td>
                                            <td>{new Date(app.date).toLocaleDateString('fr-FR')}</td>
                                            <td>{app.time || '--:--'}</td>
                                            <td>
                                                <span className={`status-badge status-${app.status}`}>
                                                    {app.status === 'pending' ? 'En attente' :
                                                        app.status === 'confirmed' ? 'Confirmé' :
                                                            app.status === 'cancelled' ? 'Annulé' : app.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    className="delete-message-btn"
                                                    onClick={() => handleDeleteAppointment(app.id)}
                                                    disabled={deletingApptId === app.id}
                                                    title="Supprimer le rendez-vous"
                                                    style={{ position: 'relative', top: '0', right: '0', opacity: 1, visibility: 'visible', padding: '6px', backgroundColor: '#fff1f2', border: '1px solid #ffe4e6', color: '#e11d48', borderRadius: '4px', cursor: 'pointer', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                                                >
                                                    {deletingApptId === app.id ? (
                                                        <span className="spinner-small" style={{ borderColor: '#e11d48', borderRightColor: 'transparent', width: '14px', height: '14px', borderWidth: '2px' }}></span>
                                                    ) : (
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="empty-state">
                                <h4>Aucun rendez-vous trouvé</h4>
                                <Link to="/rendez-vous" className="btn btn-primary">Prendre rendez-vous</Link>
                            </div>
                        )}
                    </div>
                );
            case 'messages':
                return (
                    <div className="messages-list-container">
                        {messages.length > 0 ? (
                            <div className="messages-list">
                                {messages.map(msg => (
                                    <div
                                        key={msg.id}
                                        className={`message-card ${msg.admin_reply ? 'has-reply' : ''} ${expandedMessage === msg.id ? 'expanded' : ''}`}
                                        onClick={() => setExpandedMessage(expandedMessage === msg.id ? null : msg.id)}
                                    >
                                        <div className="message-card-header">
                                            <div className="message-card-info">
                                                <h4 className="message-subject">{msg.subject}</h4>
                                                <span className="message-date">
                                                    {new Date(msg.created_at).toLocaleDateString('fr-FR', {
                                                        day: 'numeric', month: 'long', year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <div className="message-card-badges">
                                                {msg.admin_reply && (
                                                    <span className="reply-badge">
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="9 17 4 12 9 7"></polyline>
                                                            <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                                                        </svg>
                                                        Répondu
                                                    </span>
                                                )}
                                                <span className={`status-badge ${msg.is_read ? 'status-confirmed' : 'status-pending'}`}>
                                                    {msg.is_read ? 'Lu' : 'Non lu'}
                                                </span>
                                                <button
                                                    className="delete-message-btn"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDeleteMessage(msg.id);
                                                    }}
                                                    disabled={deletingId === msg.id}
                                                    title="Supprimer le message"
                                                >
                                                    {deletingId === msg.id ? (
                                                        <span className="spinner-small"></span>
                                                    ) : (
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                    )}
                                                </button>
                                                <svg className="expand-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </div>
                                        </div>

                                        {expandedMessage === msg.id && (
                                            <div className="message-card-body animate-fadeInUp">
                                                <div className="original-message-block">
                                                    <div className="block-label">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                        </svg>
                                                        Votre message
                                                    </div>
                                                    <p>{msg.message}</p>
                                                </div>

                                                {msg.admin_reply && (
                                                    <div className="admin-reply-block">
                                                        <div className="block-label admin-label">
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                            </svg>
                                                            Réponse de l'administration
                                                        </div>
                                                        <p>{msg.admin_reply}</p>
                                                        <div className="reply-meta">
                                                            <span className="reply-date">
                                                                Répondu le {new Date(msg.replied_at).toLocaleDateString('fr-FR', {
                                                                    day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
                                                                })}
                                                            </span>
                                                            {!msg.reply_read && (
                                                                <button
                                                                    className="mark-read-btn"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleMarkReplyRead(msg.id);
                                                                    }}
                                                                >
                                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                                    </svg>
                                                                    Marquer comme lu
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                )}

                                                {!msg.admin_reply && (
                                                    <div className="waiting-reply-block">
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <polyline points="12 6 12 12 16 14"></polyline>
                                                        </svg>
                                                        <span>En attente de réponse...</span>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state">
                                <h4>Aucun message envoyé</h4>
                                <Link to="/contact" className="btn btn-primary">Nous contacter</Link>
                            </div>
                        )}
                    </div>
                );
            case 'selections':
                return (
                    <div className="selections-grid">
                        {selections.length > 0 ? (
                            selections.map(service => (
                                <div key={service.id} className="selection-card">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <div className="card-actions">
                                        <Link to={`/services`} className="btn-text">Détails</Link>
                                        <button
                                            onClick={async () => {
                                                await toggleServiceSelection(service.id);
                                                // Refresh data
                                                const res = await getDashboardData();
                                                setData(res.data);
                                            }}
                                            className="btn btn-secondary btn-sm"
                                        >
                                            Retirer
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
                                <h4>Vous n'avez pas encore de services sélectionnés</h4>
                                <Link to="/services" className="btn btn-primary">Explorer les services</Link>
                            </div>
                        )}
                    </div>
                );
            default: // overview
                return (
                    <div className="overview-content">
                        <div className="welcome-section">
                            <h3>Bienvenue sur votre espace, {user.name} !</h3>
                            <p>Retrouvez ici l'historique de vos rendez-vous, vos messages et vos services préférés.</p>
                        </div>

                        <div className="overview-grid">
                            <div className="overview-card">
                                <div className="overview-card-header">
                                    <h4>Prochain Rendez-vous</h4>
                                    <Link to="#" onClick={() => setActiveTab('appointments')} className="view-all">Tout voir</Link>
                                </div>
                                <div className="overview-card-body">
                                    {appointments.length > 0 ? (
                                        <div className="featured-item">
                                            <div className="item-main">{appointments[0].service}</div>
                                            <div className="item-sub">
                                                {new Date(appointments[0].date).toLocaleDateString('fr-FR')} à {appointments[0].time}
                                            </div>
                                            <span className={`status-badge status-${appointments[0].status}`}>
                                                {appointments[0].status === 'pending' ? 'En attente' : 'Confirmé'}
                                            </span>
                                        </div>
                                    ) : (
                                        <p className="empty-text">Aucun rendez-vous à venir.</p>
                                    )}
                                </div>
                            </div>

                            <div className="overview-card">
                                <div className="overview-card-header">
                                    <h4>Dernier Message</h4>
                                    <Link to="#" onClick={() => setActiveTab('messages')} className="view-all">Tout voir</Link>
                                </div>
                                <div className="overview-card-body">
                                    {messages.length > 0 ? (
                                        <div className="featured-item">
                                            <div className="item-main">{messages[0].subject}</div>
                                            <div className="item-sub text-truncate" style={{ maxWidth: '200px' }}>
                                                {messages[0].message}
                                            </div>
                                            {messages[0].admin_reply && (
                                                <div className="overview-reply-preview">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <polyline points="9 17 4 12 9 7"></polyline>
                                                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                                                    </svg>
                                                    <span className="text-truncate">{messages[0].admin_reply}</span>
                                                </div>
                                            )}
                                            <div className="item-date">
                                                {new Date(messages[0].created_at).toLocaleDateString('fr-FR')}
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="empty-text">Aucun message envoyé.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="quick-actions-bar">
                            <h4>Actions Rapides</h4>
                            <div className="action-buttons">
                                <Link to="/rendez-vous" className="btn btn-primary btn-sm">Nouveau Rendez-vous</Link>
                                <Link to="/services" className="btn btn-secondary btn-sm">Explorer les Services</Link>
                                <Link to="/contact" className="btn btn-white btn-sm">Nous Contacter</Link>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="user-dashboard animate-fadeInUp">
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <div>
                        <h1>Mon Tableau de Bord</h1>
                        <p>Espace patient de {user.name}</p>
                    </div>
                    <div className="header-actions">
                        {/* Notification Bell */}
                        <div className="notification-wrapper" ref={notifRef}>
                            <button
                                className="notification-bell-btn"
                                onClick={() => setShowNotifications(!showNotifications)}
                                title="Notifications"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                                {stats.unread_replies > 0 && (
                                    <span className="notification-badge">{stats.unread_replies}</span>
                                )}
                                {stats.unread_replies > 0 && <span className="bell-pulse"></span>}
                            </button>

                            {showNotifications && (
                                <div className="notifications-dropdown animate-fadeInUp">
                                    <div className="notifications-header">
                                        <h4>Notifications</h4>
                                        {unreadReplies.length > 0 && (
                                            <span className="notif-count">{unreadReplies.length} nouvelle{unreadReplies.length > 1 ? 's' : ''}</span>
                                        )}
                                    </div>
                                    <div className="notifications-list">
                                        {unreadReplies.length > 0 ? (
                                            unreadReplies.map(msg => (
                                                <div key={msg.id} className="notification-item unread">
                                                    <div className="notif-icon">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="9 17 4 12 9 7"></polyline>
                                                            <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="notif-content">
                                                        <p className="notif-title">Nouvelle réponse à "<strong>{msg.subject}</strong>"</p>
                                                        <p className="notif-preview">{msg.admin_reply.substring(0, 80)}{msg.admin_reply.length > 80 ? '...' : ''}</p>
                                                        <span className="notif-time">
                                                            {new Date(msg.replied_at).toLocaleDateString('fr-FR', {
                                                                day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                                                            })}
                                                        </span>
                                                    </div>
                                                    <div className="notif-actions">
                                                        <button
                                                            className="notif-read-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleMarkReplyRead(msg.id);
                                                            }}
                                                            title="Marquer comme lu"
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg>
                                                        </button>
                                                        <button
                                                            className="notif-view-btn"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveTab('messages');
                                                                setExpandedMessage(msg.id);
                                                                setShowNotifications(false);
                                                            }}
                                                            title="Voir le message"
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                                <circle cx="12" cy="12" r="3"></circle>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="notif-empty">
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                                </svg>
                                                <p>Aucune nouvelle notification</p>
                                            </div>
                                        )}
                                    </div>
                                    {unreadReplies.length > 0 && (
                                        <div className="notifications-footer">
                                            <button
                                                className="view-all-btn"
                                                onClick={() => {
                                                    setActiveTab('messages');
                                                    setShowNotifications(false);
                                                }}
                                            >
                                                Voir tous les messages
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="dashboard-stats">
                    <div className="stat-card">
                        <div className="stat-icon icon-blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                        <div className="stat-info">
                            <h3>Rendez-vous</h3>
                            <div className="stat-value">{stats.total_appointments}</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon icon-green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div className="stat-info">
                            <h3>Messages</h3>
                            <div className="stat-value">{stats.total_messages}</div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon icon-purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        </div>
                        <div className="stat-info">
                            <h3>Sélections</h3>
                            <div className="stat-value">{stats.total_selections}</div>
                        </div>
                    </div>
                    {stats.unread_replies > 0 && (
                        <div className="stat-card stat-card-highlight">
                            <div className="stat-icon icon-rose">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                            <div className="stat-info">
                                <h3>Réponses non lues</h3>
                                <div className="stat-value">{stats.unread_replies}</div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="dashboard-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Aperçu
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('appointments')}
                    >
                        Mes Rendez-vous
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'messages' ? 'active' : ''}`}
                        onClick={() => setActiveTab('messages')}
                    >
                        Mes Messages
                        {stats.unread_replies > 0 && (
                            <span className="tab-badge">{stats.unread_replies}</span>
                        )}
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'selections' ? 'active' : ''}`}
                        onClick={() => setActiveTab('selections')}
                    >
                        Mes Sélections
                    </button>
                </div>

                <div className="tab-content animate-fadeInUp">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
