import React from 'react';
import { InlineWidget } from 'react-calendly';

const Contact: React.FC = () => (
  <div className="custom-container-contents bg-tertiary-light" id="contact">
    <div className="custom-header lg:mb-0">
      <h2 className="custom-header-title m-4">Contact</h2>
      <h5>Schedule a free 30 minute consultation session</h5>
    </div>
    <InlineWidget
      url="https://calendly.com/hashcloak/30min"
      styles={{ height: '900px', width: '100%' }}
    />
  </div>
);

export default Contact;
