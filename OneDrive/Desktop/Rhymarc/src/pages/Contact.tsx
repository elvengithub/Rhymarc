import React from 'react';
import { Phone, Mail, Facebook, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const faqs = [
    {
      q: 'Do I need a doctor\'s referral?',
      a: 'Yes, a doctor\'s referral is required for all clients with medical conditions to ensure safe and appropriate clinical management.'
    },
    {
      q: 'How long is a therapy session?',
      a: 'A clinical session typically lasts 45 to 60 minutes, contingent upon the diagnostic requirements.'
    },
    {
      q: 'Do you treat children?',
      a: 'Yes, specialized pediatric rehabilitation for developmental and neurological conditions is available.'
    },
    {
      q: 'Do you offer home visits outside Cebu City?',
      a: 'Currently, the catchment areas are Cebu City and Minglanilla. Please inquire for special geographical considerations.'
    },
    {
      q: 'How much does therapy cost?',
      a: 'Clinical rates are structured based on the specific pathology and location. Detailed pricing is available upon professional inquiry.'
    }
  ];

  return (
    <div className="contact-page">
      <section className="page-header bg-ivory">
        <div className="container text-center">
          <span className="badge">Communication</span>
          <h1>Clinical Inquiries</h1>
          <p className="max-width-700 mx-auto">Access direct professional communication for clinical consultations and appointment scheduling.</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="max-width-700 mx-auto">
            <div className="contact-grid-clinical">
              <a href="tel:09605204935" className="contact-card-clinical">
                <div className="icon-box"><Phone size={24} /></div>
                <div>
                  <h3>Direct Phone</h3>
                  <p>09605204935</p>
                </div>  
              </a>
              <a href="mailto:rhymarc05@gmail.com" className="contact-card-clinical">
                <div className="icon-box"><Mail size={24} /></div>
                <div>
                  <h3>Professional Email</h3>
                  <p>rhymarc05@gmail.com</p>
                </div>
              </a>
              <a href="https://facebook.com/angelo.xerbac" target="_blank" rel="noopener noreferrer" className="contact-card-clinical">
                <div className="icon-box"><Facebook size={24} /></div>
                <div>
                  <h3>Official Facebook</h3>
                  <p>Rhymarc Cabrera</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section bg-ivory">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Administrative FAQ</h2>
            <p>Answers regarding clinical documentation, logistics, and professional standards.</p>
          </div>
          <div className="faq-list-clinical mt-4">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item-clinical">
                <summary className="faq-question-clinical">
                  <span>{faq.q}</span>
                  <ChevronDown size={24} />
                </summary>
                <div className="faq-answer-clinical">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { padding: 6rem 0; border-bottom: 1px solid var(--border-color); }
        .contact-info-section { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        
        .contact-card-clinical {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: white;
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          margin-bottom: 1rem;
          transition: var(--transition);
        }
        .contact-card-clinical:hover { border-color: var(--sage); transform: translateX(10px); }
        .contact-card-clinical h3 { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 800; text-transform: uppercase; margin-bottom: 0.2rem; }
        .contact-card-clinical p { font-size: 1.1rem; color: var(--sage); font-weight: 700; margin-bottom: 0; }

        .faq-section { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        .faq-list-clinical { max-width: 800px; margin: 0 auto; }
        .faq-item-clinical {
          background: var(--white);
          margin-bottom: 1.5rem;
          border: 1px solid var(--border-color);
        }
        .faq-question-clinical {
          padding: 2rem;
          cursor: pointer;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 1.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
        }
        .faq-question-clinical::-webkit-details-marker { display: none; }
        .faq-answer-clinical { padding: 0 2rem 2rem; color: var(--text-muted); font-size: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem; margin-top: 0.5rem; }
        
        .mb-4 { margin-bottom: 3rem; }
        .mt-4 { margin-top: 4rem; }
      `}</style>
    </div>
  );
};

export default Contact;
