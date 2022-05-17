import React from 'react';

const MainVisual: React.FC = () => (
  <div
    className="custom-container flex sm:items-center sm:justify-between sm:h-screen sm:flex-row bg-gradient-to-br from from-tertiary-main to-white text-white justify-center items-center flex-col custom-h-screen-v80"
    id="main"
  >
    <div className="flex justify-start flex-col z-10 w-full md:w-full sm:w-2/4">
      <div className="sm:flex sm:flex-col sm:text-left text-center">
        <h2>Building </h2>
        <h2>Vertically-Integrated</h2>
        <h2>Privacy By Defaults</h2>
      </div>
      <h6 className="my-2.5 text-center sm:text-left sm:w-full font-bold">
        HashCloak is an independent research lab focused on helping
        organizations and blockchain communities integrate a privacy-first
        approach into their processes.
      </h6>
    </div>
    <img
      src="./assets/main-visual-bg.png"
      alt="main-visual-bg"
      className="object-contain w-full"
    />
  </div>
);

export default MainVisual;
