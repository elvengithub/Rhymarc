import React from 'react';
import { Activity, Brain, Heart, Zap, Target, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      id: 'musculoskeletal',
      title: 'Musculoskeletal Rehabilitation',
      icon: <Activity size={32} />,
      description: 'Comprehensive recovery for bone, muscle, and joint conditions.',
      conditions: [
        'Frozen Shoulder', 'Rotator Cuff Tear', 'Fractures', 'Scoliosis', 'Sprains',
        'Muscle Strains', 'Ligament Injuries', 'Amputation', 'Plantar Fasciitis',
        'Low Back Pain', 'Rheumatoid / Osteoarthritis', 'Arthroplasties',
        'Post-Operative Recovery', 'Sports Injuries'
      ]
    },
    {
      id: 'neurologic',
      title: 'Neurologic Rehabilitation',
      icon: <Brain size={32} />,
      description: 'Specialized therapy for disorders of the nervous system.',
      conditions: [
        'Stroke / CVA', 'Traumatic Brain Injury', 'Parkinson\'s Disease',
        'Multiple Sclerosis', 'Motor Neuron Disease', 'Spinal Cord Injury',
        'Peripheral Nerve Injury', 'Bell\'s Palsy'
      ]
    },
    {
      id: 'pediatric',
      title: 'Pediatric Rehabilitation',
      icon: <Zap size={32} />,
      description: 'Helping children reach their physical milestones.',
      conditions: [
        'Cerebral Palsy', 'Down Syndrome', 'Autism Spectrum Disorder',
        'Muscular Dystrophy', 'Torticollis', 'Global Developmental Delay (GDD)'
      ]
    },
    {
      id: 'geriatric',
      title: 'Geriatric Rehabilitation',
      icon: <Heart size={32} />,
      description: 'Enhancing mobility and safety for seniors.',
      conditions: [
        'Deconditioning', 'Generalized Weakness', 'Gait Impairments',
        'Balance Problems', 'Fall Risk', 'Coordination Issues'
      ]
    },
    {
      id: 'fitness',
      title: 'Fitness Coaching & Conditioning',
      icon: <Target size={32} />,
      description: 'Programs for strength, mobility, and long-term wellness.',
      conditions: [
        'Strength improvement', 'Mobility training', 'Injury prevention',
        'Post-rehab conditioning', 'Mobility improvement', 'Functional strengthening'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="page-header bg-ivory">
        <div className="container text-center">
          <span className="badge">Our Expertise</span>
          <h1>Clinical Rehabilitation Services</h1>
          <p className="max-width-700 mx-auto">Providing advanced physical therapy across a wide spectrum of medical conditions with professional excellence.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {serviceCategories.map((cat, index) => (
            <div key={cat.id} className={`service-row-clinical ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-info-clinical">
                <div className="icon-box-large">{cat.icon}</div>
                <h2>{cat.title}</h2>
                <p>{cat.description}</p>
              </div>
              <div className="service-conditions-clinical card">
                <h3 className="conditions-label">Clinical Conditions:</h3>
                <ul className="conditions-list-clinical">
                  {cat.conditions.map(c => (
                    <li key={c}><ChevronRight size={16} /> {c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner bg-dark text-center">
        <div className="container">
          <div className="max-width-700 mx-auto">
            <h2>Specialized Inquiry</h2>
            <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem'}}>If you have a condition that requires specific clinical attention, please contact us for a professional consultation.</p>
            <a href="/contact" className="btn btn-primary">Professional Inquiry</a>
          </div>
        </div>
      </section>

      <style>{`
        .page-header { padding: 6rem 0; border-bottom: 1px solid var(--border-color); }
        .service-row-clinical {
          padding: 8rem 0;
          display: flex;
          gap: 6rem;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-color);
        }
        .service-row-clinical.reverse { flex-direction: row-reverse; }
        .service-info-clinical { flex: 1; }
        .service-info-clinical h2 { margin: 1.5rem 0; font-size: 2.2rem; }
        
        .icon-box-large {
          width: 64px;
          height: 64px;
          background: var(--ivory);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
        }

        .service-conditions-clinical { flex: 1.2; padding: 3rem; border-radius: 4px; }
        .conditions-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--sage);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1rem;
        }

        .conditions-list-clinical {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          list-style: none;
        }
        .conditions-list-clinical li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--charcoal);
          font-weight: 700;
          font-size: 0.9rem;
        }
        .conditions-list-clinical li svg { color: var(--sage); flex-shrink: 0; }

        @media (max-width: 968px) {
          .service-row-clinical, .service-row-clinical.reverse { flex-direction: column; gap: 3rem; padding: 4rem 0; }
          .conditions-list-clinical { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Services;
