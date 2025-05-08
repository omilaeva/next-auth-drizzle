// @flow
import * as React from 'react';

export const FeatureSection = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to efficiently manage maintenance requests and service calls.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile Requests</h3>
            <p>Allow tenants to submit maintenance requests directly from their mobile devices with photos and detailed
              descriptions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Automated Workflows</h3>
            <p>Automatically assign service calls to vendors based on property location, service type, and
              availability.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Real-time Analytics</h3>
            <p>Track service call metrics, response times, and maintenance costs with intuitive dashboards.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Scheduling System</h3>
            <p>Integrated calendar for scheduling maintenance visits with automated tenant notifications.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Digital Documentation</h3>
            <p>Store all service records, invoices, and maintenance history in one secure location.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Communication Hub</h3>
            <p>Built-in messaging system to keep property managers, tenants, and service providers in sync.</p>
          </div>
        </div>
      </div>
    </section>
  );
};