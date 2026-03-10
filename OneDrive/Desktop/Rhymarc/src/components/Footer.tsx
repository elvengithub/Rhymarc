import React from 'react';
import { Phone, Mail, Facebook, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container grid grid-2">
        <div className="footer-section">
          <h3>Rhymarc Angelo Cabrera</h3>
          <p>Licensed Physical Therapist providing premium home care rehabilitation and fitness coaching in Cebu City and Minglanilla.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/angelo.xerbac" target="_blank" rel="noopener noreferrer"><Facebook /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul className="contact-info">
            <li><Phone size={18} /> 09605204935</li>
            <li><Mail size={18} /> rhymarc05@gmail.com</li>
            <li><MapPin size={18} /> Cebu City & Minglanilla</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rhymarc Angelo Cabrera. Botanical Minimalism meets Medical Professionalism.</p>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 6rem 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-section h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          color: var(--sage-light);
          margin-bottom: 2rem;
        }
        .footer-section p {
          color: rgba(255, 255, 255, 0.7);
          max-width: 400px;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section ul li {
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }
        .contact-info li {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .contact-info li svg { color: var(--sage-light); }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .social-links a {
          color: var(--white);
          opacity: 0.6;
          transition: var(--transition);
        }
        .social-links a:hover {
          opacity: 1;
          color: var(--sage-light);
        }
        .footer-bottom {
          margin-top: 5rem;
          padding: 2.5rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 1px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
