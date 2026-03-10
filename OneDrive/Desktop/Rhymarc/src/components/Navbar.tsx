import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span className="logo-name">Rhymarc Angelo Cabrera</span>
          <span className="logo-title">Physical Therapist</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active-link' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn btn-primary btn-sm" onClick={() => setIsOpen(false)}>Book Appointment</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
        .navbar {
          background-color: var(--white);
          padding: 1.2rem 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          border-bottom: 1px solid var(--border-color);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          flex-direction: column;
        }
        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--charcoal);
          line-height: 1;
        }
        .logo-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          color: var(--sage);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: 4px;
          font-weight: 700;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--charcoal-light);
          text-decoration: none !important;
          transition: color 0.2s ease;
        }
        .nav-links a:hover, .nav-links a.active-link {
          color: var(--sage);
        }
        .btn-sm {
          padding: 0.7rem 1.4rem;
          font-size: 0.8rem;
          border-radius: 4px;
        }
        .mobile-toggle {
          display: none;
          background: none;
          color: var(--charcoal);
          border: none;
          cursor: pointer;
        }
        @media (max-width: 968px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--white);
            flex-direction: column;
            justify-content: flex-start;
            padding: 2rem;
            gap: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
          }
          .nav-links.active {
            transform: translateX(0);
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
