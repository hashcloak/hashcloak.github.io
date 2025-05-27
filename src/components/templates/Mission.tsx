import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const title = 'Our Mission';

const Mission: React.FC = () => (
  <BaseContainer id="mission">
    <TitleHeader title={title} />

    <div className="flex items-center justify-between">
      <img
        src="./assets/mission-image.png"
        alt="mission"
        className="w-1/3 object-contain sm:w-72 md:w-96"
      />
      <div className="max-w-lg text-left">
        <p>
          Our mission is to make it as easy as possible to use privacy enhancing
          technology (PET) securely and with the best UX possible for the
          cryptocurrency industry.
        </p>
      </div>
    </div>
  </BaseContainer>
);

export default Mission;
