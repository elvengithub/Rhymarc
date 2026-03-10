import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';
import therapistPhoto from '../assets/Rhymarc.jpg';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <section className="page-header bg-ivory">
        <div className="container text-center">
          <span className="badge">Professional Profile</span>
          <h1>About the Therapist</h1>
          <p className="max-width-700 mx-auto">Get to know Rhymarc Angelo Cabrera, a dedicated professional in clinical rehabilitation and long-term wellness.</p>
        </div>
      </section>

      <section className="profile-section">
        <div className="container grid grid-2 align-center">
          <div className="profile-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <img 
                  src={therapistPhoto} 
                  alt="Rhymarc Angelo Cabrera" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '4px' }} 
                />
              </div>
            </div>
          </div>
          <div className="profile-content">
            <span className="badge">Clinical Background</span>
            <h2>Rhymarc Angelo Cabrera, PT</h2>
            <p className="lead-alt">Licensed Physical Therapist</p>
            <p>I am a dedicated Physical Therapist with extensive experience in helping patients regain their independence and functional mobility through structured clinical protocols.</p>
            <p>By bringing hospital-grade expertise directly to your home, I ensure that you receive premium care without the logistical barriers of a clinic, focusing on measurable outcomes and safety.</p>
          </div>
        </div>
      </section>

      <section className="credentials bg-ivory">
        <div className="container">
          <h2 className="text-center mb-4">Credentials & Clinical Experience</h2>
          <div className="grid grid-3 mt-4">
            <div className="card">
              <div className="icon-box"><BookOpen size={24} /></div>
              <h3>Education</h3>
              <p>Bachelor of Science in Physical Therapy</p>
            </div>
            <div className="card">
              <div className="icon-box"><Award size={24} /></div>
              <h3>Certifications</h3>
              <ul className="clean-list">
                <li>Licensed Physical Therapist (PH)</li>
                <li>First Aid & CPR Certified</li>
              </ul>
            </div>
            <div className="card">
              <div className="icon-box"><Award size={24} /></div>
              <h3>Experience</h3>
              <p>Years of dedicated clinical practice in acute hospital settings and private home-care rehabilitation.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { padding: 6rem 0; border-bottom: 1px solid var(--border-color); }
        .profile-section { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        .max-width-700 { max-width: 700px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .profile-content .lead-alt {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.4rem;
          color: var(--sage);
          margin-bottom: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .image-frame {
          padding: 10px;
          background: var(--white);
          border: 1px solid var(--border-color);
          border-radius: 4px;
        }
        .image-placeholder {
          height: 450px;
          background: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          overflow: hidden;
        }
        .align-center { align-items: center; }
        .mb-4 { margin-bottom: 3rem; }
        .mt-4 { margin-top: 4rem; }
        .clean-list { list-style: none; }
        .clean-list li { 
          margin-bottom: 0.8rem; 
          font-weight: 700; 
          color: var(--charcoal);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .clean-list li::before { content: '•'; color: var(--sage); }
      `}</style>
    </div>
  );
};

export default About;
