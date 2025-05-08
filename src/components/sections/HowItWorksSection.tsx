// @flow
import * as React from 'react';

export const HowItWorksSection = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How HyperIn Care Works</h2>
          <p>Our streamlined process makes managing service calls simple and efficient.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Request Submission</h3>
            <p>Tenants submit maintenance requests through the mobile app or web portal with details and photos.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Service Dispatch</h3>
            <p>Requests are automatically routed to the appropriate service providers based on your custom rules.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Resolution & Documentation</h3>
            <p>Service providers update work status, and all documentation is stored for future reference.</p>
          </div>
        </div>
      </div>
    </section>
  );
};