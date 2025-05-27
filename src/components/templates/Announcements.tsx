import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const title = 'Keeping up HashCloak';

const Announcements: React.FC = () => (
  <BaseContainer id="announcements">
    <TitleHeader title={title} />
    <div className="custom-contents lg:grid-cols-2 lg:items-start">
      <div className="custom-contents-item">
        <a
          href="https://write.as/hashcloaks-blog/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/announcements-blogs.png"
            alt="blog"
            className="inline"
          />
          <h5>Research</h5>
        </a>
      </div>
      <div className="custom-contents-item">
        <a
          href="https://hashcloak.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./assets/announcements-newsletter.png"
            alt="newsletter"
            className="inline"
          />
          <h5>HashCloak Newsletter</h5>
          <p className="text-secondary-dark font-normal">
            Periodic updates about current HashCloak projects and offerings
          </p>
        </a>
      </div>
    </div>
  </BaseContainer>
);

export default Announcements;
