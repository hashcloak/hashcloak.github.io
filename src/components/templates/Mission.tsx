import React from 'react';

const Mission: React.FC = () => (
  <div className="custom-container-contents" id="mission">
    <div className="custom-header">
      <h2 className="custom-header-title">Our Mission</h2>
    </div>
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
  </div>
);

export default Mission;
