import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const title = 'Keeping up HashCloak';

const Announcements: React.FC = () => (
  <BaseContainer id="announcements">
    <TitleHeader title={title} />
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
  </BaseContainer>
);

export default Announcements;
