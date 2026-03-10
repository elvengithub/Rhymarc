import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, MapPin, CheckCircle, Activity, Brain, Heart, Target, Phone, Mail, Stethoscope } from 'lucide-react';
import therapistPhoto from '../assets/Rhymarc.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container grid grid-2 align-center">
          <div className="hero-content">
            <span className="badge">Home Care Physical Therapy</span>
            <h1>Restoring Motion, <br/>In Your Own Home.</h1>
            <p className="lead mb-2">Rhymarc Angelo Cabrera, Licensed Physical Therapist</p>
            <p className="hero-desc">Experience professional clinical rehabilitation delivered with excellence. We bring the clinic to your doorstep in Cebu City and Minglanilla.</p>
            <div className="hero-btns">
              <Link to="/booking" className="btn btn-primary">Book Appointment</Link>
              <Link to="/services" className="btn btn-secondary">Explore Services</Link>
            </div>
            <div className="areas-pill">
              <MapPin size={20} className="icon-sage" /> Serving Cebu City & Minglanilla
            </div>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <img 
                  src={therapistPhoto} 
                  alt="Rhymarc Angelo Cabrera" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
                />
              </div>
              <div className="floating-badge">
                <Shield size={18} />
                <span>Licensed Professional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="why-choose bg-ivory">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Professional Excellence</span>
            <h2>Grounded in Clinical Trust</h2>
            <p className="max-width-700 mx-auto">Providing structured, evidence-based physical therapy with a focus on measurable recovery and patient safety.</p>
          </div>
          <div className="grid grid-3 mt-4">
            <div className="card">
              <div className="icon-box"><Heart size={28} /></div>
              <h3>Personalized Care</h3>
              <p>Individualized treatment protocols designed specifically for your medical history and recovery goals.</p>
            </div>
            <div className="card">
              <div className="icon-box"><Clock size={28} /></div>
              <h3>Clinical Convenience</h3>
              <p>Eliminate travel time. Receive full hospital-grade physical therapy in your private residence.</p>
            </div>
            <div className="card">
              <div className="icon-box"><Shield size={28} /></div>
              <h3>Expert Standards</h3>
              <p>Care provided by a fully licensed professional with extensive hospital and home-care experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="grid grid-2 align-center">
            <div className="services-text">
              <span className="badge">Our Expertise</span>
              <h2>Specialized Rehabilitation</h2>
              <p>We utilize the latest clinical research and proven protocols to ensure your rehabilitation is both safe and effective.</p>
              <div className="service-list-mini">
                <div className="mini-item"><CheckCircle size={18} /> Orthopedic Recovery</div>
                <div className="mini-item"><CheckCircle size={18} /> Neurological Rehab</div>
                <div className="mini-item"><CheckCircle size={18} /> Geriatric Care</div>
                <div className="mini-item"><CheckCircle size={18} /> Pediatric Support</div>
              </div>
              <Link to="/services" className="btn btn-secondary mt-2">View All Services</Link>
            </div>
            <div className="grid grid-2 services-grid-cards">
              <div className="card service-small">
                <Activity size={32} />
                <h4>Orthopedic</h4>
              </div>
              <div className="card service-small">
                <Brain size={32} />
                <h4>Neurologic</h4>
              </div>
              <div className="card service-small">
                <Heart size={32} />
                <h4>Geriatric</h4>
              </div>
              <div className="card service-small">
                <Target size={32} />
                <h4>Fitness</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section bg-dark text-center">
        <div className="container">
          <div className="max-width-800 mx-auto">
            <h2>Schedule Your Assessment</h2>
            <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem'}}>Begin your journey to recovery with a professional clinical consultation.</p>
            <div className="cta-btns">
              <a href="tel:09605204935" className="btn btn-primary"><Phone size={18} /> 09605204935</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rhymarc05@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary-dark"><Mail size={18} /> Email Inquiries</a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        .hero-desc { font-size: 1.1rem; color: var(--text-muted); margin-bottom: 2.5rem; }
        .hero-btns { display: flex; gap: 1rem; margin-bottom: 2.5rem; }
        .align-center { align-items: center; }
        .mb-2 { margin-bottom: 1rem; }
        
        .areas-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 700;
          color: var(--charcoal);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .image-frame {
          position: relative;
          padding: 10px;
          background: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        
        .image-placeholder {
          height: 500px;
          background: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          overflow: hidden;
        }

        .floating-badge {
          position: absolute;
          bottom: 30px;
          left: -30px;
          background: var(--white);
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow-md);
          font-weight: 800;
          font-size: 0.8rem;
          color: var(--sage);
          text-transform: uppercase;
          border: 1px solid var(--border-color);
        }

        .service-list-mini {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .mini-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          color: var(--charcoal-light);
          font-size: 0.85rem;
        }
        .mini-item svg { color: var(--sage); }

        .services-grid-cards .card.service-small {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
        }
        .services-grid-cards .card.service-small h4 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0;
        }
        .services-grid-cards .card.service-small svg { color: var(--sage); }

        .btn-secondary-dark {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
        }
        .btn-secondary-dark:hover {
          background: white;
          color: var(--charcoal);
        }

        .cta-btns {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .hero-btns, .cta-btns { flex-direction: column; }
          .image-placeholder { height: 350px; }
          .floating-badge { left: 10px; bottom: 20px; }
        }
      `}</style>
    </div>
  );
};

export default Home;
