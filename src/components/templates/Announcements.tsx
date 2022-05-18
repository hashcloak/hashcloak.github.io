import React from 'react';

const Announcements: React.FC = () => (
  <div className="custom-container-contents" id="announcements">
    <div className="custom-header">
      <h2 className="custom-header-title">Keeping up HashCloak</h2>
    </div>
    <div className="custom-contents lg:grid-cols-2 lg:items-start">
      <a
        href="https://write.as/hashcloaks-blog/"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-contents-item"
      >
        <img src="./assets/announcements-blogs.png" alt="blog" />
        <h5>Research</h5>
      </a>
      <a
        href="https://hashcloak.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-contents-item"
      >
        <img src="./assets/announcements-newsletter.png" alt="newsletter" />
        <h5>HashCloak Newsletter</h5>
        <p className="text-secondary-dark font-normal">
          Periodic updates about current HashCloak projects and offerings
        </p>
      </a>
    </div>
  </div>
);

export default Announcements;
