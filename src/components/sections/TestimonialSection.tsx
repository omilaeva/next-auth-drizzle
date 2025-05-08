// @flow
import * as React from 'react';
import {UserAvatar} from "@/components/user/UserAvatar";

export const TestimonialSection = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Join thousands of satisfied property managers who have transformed their maintenance operations.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">HyperIn Care has reduced our response time by 60% and completely eliminated
              the paperwork nightmare. Our tenants love the transparency and we love the efficiency.</p>
            <div className="testimonial-author">
              <div className={"p-2"}><UserAvatar user={{name: "Sarah Johnsonx"}}/></div>
              <div className="author-details">
                <h4>Sarah Johnson</h4>
                <p>Property Manager, Horizon Properties</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">Managing service calls for our 200+ units used to be a full-time job for
              two people. Now with Property Care, one person handles it all with time to spare.</p>
            <div className="testimonial-author">
              <div className={"p-2"}><UserAvatar user={{name: "Michael Rodriguez"}}/></div>
              <div className="author-details">
                <h4>Michael Rodriguez</h4>
                <p>Owner, MR Real Estate Group</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">The analytics feature alone has saved us thousands in maintenance costs by
              helping us identify recurring issues and proactively address them.</p>
            <div className="testimonial-author">
              <div className={"p-2"}><UserAvatar user={{name: "Jennifer Lee"}} /></div>
              <div className="author-details">
                <h4>Jennifer Lee</h4>
                <p>Director of Operations, Citywide Housing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};