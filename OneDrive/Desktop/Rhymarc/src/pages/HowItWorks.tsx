import React from 'react';
import { MessageSquare, ClipboardList, TrendingUp, Home } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Initial Intake',
      icon: <MessageSquare size={28} />,
      desc: 'Connect with us to provide your medical history and specific rehabilitation needs.',
      details: ['Review symptoms', 'Check doctor referral', 'Discuss goals']
    },
    {
      id: 2,
      title: 'Clinical Evaluation',
      icon: <ClipboardList size={28} />,
      desc: 'A comprehensive in-home assessment to establish baseline functional metrics.',
      details: ['Physical assessment', 'Environment review', 'Protocol drafting']
    },
    {
      id: 3,
      title: 'Evidence-Based Plan',
      icon: <TrendingUp size={28} />,
      desc: 'Creation of a structured rehabilitation program tailored to your assessment data.',
      details: ['Metric-based goals', 'Visit scheduling', 'Outcome modeling']
    },
    {
      id: 4,
      title: 'Active Rehabilitation',
      icon: <Home size={28} />,
      desc: 'Execution of your clinical treatment plan through scheduled in-home therapy.',
      details: ['Expert therapy', 'Progress reporting', 'Adjusting care']
    }
  ];

  return (
    <div className="how-it-works-page">
      <section className="page-header bg-ivory">
        <div className="container text-center">
          <span className="badge">The Protocol</span>
          <h1>Clinical Care Workflow</h1>
          <p className="max-width-700 mx-auto">A transparent and professional process ensuring consistent quality in home-based rehabilitation.</p>
        </div>
      </section>

      <section className="steps-section">
        <div className="container">
          <div className="grid grid-4">
            {steps.map((step) => (
              <div key={step.id} className="card-step-clinical">
                <div className="step-tag">Step 0{step.id}</div>
                <div className="icon-box">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <ul className="step-list-clinical">
                  {step.details.map(d => <li key={d}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { padding: 6rem 0; border-bottom: 1px solid var(--border-color); }
        .steps-section { padding: 8rem 0; border-bottom: 1px solid var(--border-color); }
        
        .card-step-clinical {
          background: var(--white);
          padding: 2.5rem;
          border: 1px solid var(--border-color);
          position: relative;
        }
        .step-tag {
          position: absolute;
          top: 0;
          right: 0;
          background: var(--sage);
          color: white;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.4rem 0.8rem;
          text-transform: uppercase;
        }
        .card-step-clinical h3 { font-size: 1.3rem; margin-top: 1rem; }
        .card-step-clinical p { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 2rem; }
        
        .step-list-clinical { list-style: none; padding-top: 1.5rem; border-top: 1px solid var(--border-color); }
        .step-list-clinical li {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--sage);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .step-list-clinical li::before { content: '•'; }

        @media (max-width: 1100px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .grid-4 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
};

export default HowItWorks;
