import React from 'react';

const MainVisual: React.FC = () => (
  <div
    className="custom-container from custom-h-screen-v80 flex flex-col items-center justify-center text-white bg-gradient-to-br from-tertiary-main to-white sm:flex-row sm:items-center sm:justify-between sm:h-screen"
    id="main"
  >
    <div className="z-10 flex flex-col justify-start w-full sm:w-2/4 md:w-full">
      <div className="text-center sm:flex sm:flex-col sm:text-left">
        <h2>Building </h2>
        <h2>Vertically-Integrated</h2>
        <h2>Privacy By Defaults</h2>
      </div>
      <h6 className="my-2.5 text-center font-bold sm:w-full sm:text-left">
        HashCloak is an independent research lab focused on helping
        organizations and blockchain communities integrate a privacy-first
        approach into their processes.
      </h6>
    </div>
    <img
      src="./assets/main-visual-bg.png"
      alt="main-visual-bg"
      className="w-full object-contain"
    />
  </div>
);

export default MainVisual;
