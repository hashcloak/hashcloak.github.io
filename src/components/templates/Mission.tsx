import React from 'react';

const Mission: React.FC = () => (
  <div className="custom-container-contents" id="mission">
    <h2 className="custom-title">Our Mission</h2>
    <div className="flex justify-between items-center">
      <img
        src="./assets/mission-image.png"
        alt="mission"
        className="object-contain w-1/3 sm:w-72 md:w-96"
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
