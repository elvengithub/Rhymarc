import React from 'react';
import { DollarSign, ShieldAlert, FileText, Phone, Facebook } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <div className="booking-page">
      <section className="page-header bg-ivory">
        <div className="container text-center">
          <span className="badge">Administrative Info</span>
          <h1>Clinical Booking & Rates</h1>
          <p className="max-width-700 mx-auto">Standardized professional rates and safety policies ensuring transparent and ethical clinical care.</p>
        </div>
      </section>

      <section className="booking-content">
        <div className="container">
          <div className="max-width-900 mx-auto">
            <div className="grid grid-2 mb-4">
              <div className="card-clinical">
                <div className="card-clinical-header">
                  <div className="icon-box"><DollarSign size={24} /></div>
                  <h3>Professional Rates</h3>
                </div>
                <p>Standardized clinical fees are applicable. Rates are determined based on:</p>
                <ul className="clinical-list">
                  <li>Pathology Type</li>
                  <li>Geographic Location (Cebu/Minglanilla)</li>
                  <li>Treatment Session Duration</li>
                </ul>
              </div>

              <div className="card-clinical">
                <div className="card-clinical-header">
                  <div className="icon-box"><FileText size={24} /></div>
                  <h3>Doctor's Referral</h3>
                </div>
                <p>A formal medical referral is mandatory for patients with diagnosed pathologies. Please present clinical documentation at assessment.</p>
              </div>
            </div>

            <div className="card-clinical mb-4 bg-ivory">
              <div className="card-clinical-header">
                <div className="icon-box"><ShieldAlert size={24} /></div>
                <h3>Safety & Ethical Policy</h3>
              </div>
              <p>We maintain a rigorous safety protocol. Clinical services may be deferred if the domestic environment is deemed unsafe or if the patient's condition falls outside our specialized scope of clinical competence.</p>
            </div>

            <div className="booking-cta-box text-center">
              <h2 className="mb-2">Schedule Assessment</h2>
              <p>Please contact the therapist directly via the clinical communication channels below.</p>
              <div className="booking-links mt-3">
                <a href="tel:09605204935" className="btn btn-primary"><Phone size={18} /> Call 09605204935</a>
                <a href="https://facebook.com/angelo.xerbac" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><Facebook size={18} /> Message Profile</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { padding: 6rem 0; border-bottom: 1px solid var(--border-color); }
        .booking-content { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        .max-width-900 { max-width: 900px; }
        .card-clinical {
          padding: 2.5rem;
          background: var(--white);
          border: 1px solid var(--border-color);
        }
        .card-clinical-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .card-clinical-header h3 { font-size: 1.3rem; margin: 0; }
        .card-clinical p { font-size: 0.95rem; color: var(--text-muted); }
        
        .clinical-list { list-style: none; margin-top: 1rem; }
        .clinical-list li {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--sage);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .clinical-list li::before { content: '•'; }

        .booking-cta-box {
          padding: 4rem 3rem;
          border: 1px solid var(--border-color);
          background: var(--white);
        }
        .booking-links { display: flex; justify-content: center; gap: 1.5rem; }
        .mb-4 { margin-bottom: 3rem; }
        .mt-3 { margin-top: 2rem; }
        .mb-2 { margin-bottom: 1rem; }

        @media (max-width: 768px) { .booking-links { flex-direction: column; } }
      `}</style>
    </div>
  );
};

export default Booking;
