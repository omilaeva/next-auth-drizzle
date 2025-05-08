// @flow
import * as React from 'react';

export const PricingSection = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that best fits your property management needs.</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
            </div>
            <div className="pricing-body">
              <div className="price">$49<span>/month</span></div>
              <p>Perfect for small property managers</p>
              <ul className="pricing-features">
                <li>Up to 25 units</li>
                <li>Mobile request submission</li>
                <li>Basic reporting</li>
                <li>Email support</li>
                <li>7-day history</li>
              </ul>
              <a href="#" className="btn">Get Started</a>
            </div>
          </div>
          <div className="pricing-card popular">
            <div className="pricing-header">
              <h3>Professional</h3>
            </div>
            <div className="pricing-body">
              <div className="price">$99<span>/month</span></div>
              <p>For growing property portfolios</p>
              <ul className="pricing-features">
                <li>Up to 100 units</li>
                <li>Automated workflows</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
                <li>1-year history</li>
                <li>Vendor management</li>
              </ul>
              <a href="#" className="btn btn-accent">Get Started</a>
            </div>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
            </div>
            <div className="pricing-body">
              <div className="price">$249<span>/month</span></div>
              <p>For large-scale property management</p>
              <ul className="pricing-features">
                <li>Unlimited units</li>
                <li>Custom workflows</li>
                <li>API integration</li>
                <li>Dedicated account manager</li>
                <li>Unlimited history</li>
                <li>White labeling</li>
              </ul>
              <a href="#" className="btn">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};