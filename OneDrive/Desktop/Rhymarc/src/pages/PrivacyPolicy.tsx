import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="legal-page">
      <section className="page-header">
        <div className="container">
          <h1>Terms & Privacy Policy</h1>
        </div>
      </section>

      <section className="legal-content">
        <div className="container">
          <div className="card">
            <h2>Terms and Conditions</h2>
            <p>By seeking treatment from Rhymarc Angelo Cabrera, PT, you agree to the following:</p>
            <ul>
              <li><strong>Treatment Eligibility:</strong> All patients must provide accurate medical history and, where applicable, a doctor's referral.</li>
              <li><strong>Referral Requirement:</strong> A valid doctor's referral is mandatory for patients with diagnosed medical conditions.</li>
              <li><strong>Liability:</strong> While every care is taken to ensure safe and effective treatment, patients participate in home therapy at their own risk within the bounds of professional standards.</li>
              <li><strong>Cancellation:</strong> Please provide at least 24 hours notice for cancellations.</li>
            </ul>

            <h2 className="mt-3">Privacy Policy</h2>
            <p>Your privacy is important to us. This policy outlines how we handle your data:</p>
            <ul>
              <li><strong>Patient Data Protection:</strong> All medical and personal information collected during assessments and treatments is kept strictly confidential and used only for your care.</li>
              <li><strong>Contact Data Usage:</strong> Your contact information (phone, email) is used solely for scheduling and communicating about your therapy sessions.</li>
              <li><strong>Third-Party Sharing:</strong> We do not share your personal or medical data with third parties without your explicit consent, except as required by law.</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .page-header {
          background-color: var(--primary-dark);
          color: white;
          padding: 4rem 0;
          text-align: center;
        }
        .legal-content { padding: 4rem 0; }
        .legal-content h2 { color: var(--primary); margin-bottom: 1.5rem; }
        .legal-content ul { margin-bottom: 2rem; padding-left: 1.5rem; }
        .legal-content li { margin-bottom: 0.8rem; }
        .mt-3 { margin-top: 3rem; }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
