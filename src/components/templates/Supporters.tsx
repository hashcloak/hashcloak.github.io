import React from 'react';

const Supporters: React.FC = () => (
  <div
    className="custom-container-contents"
    id="supporters"
    style={{ backgroundImage: 'linear-gradient(to left, #c0e3e5, #fff)' }}
  >
    <div className="custom-header">
      <h2 className="custom-header-title m-4">Clients</h2>
      <h5>
        We build vertically-intergrated privacy products for the cryptocurrency
        space.
      </h5>
    </div>
    <div className="grid gap-4 grid-cols-1 items-center justify-center place-items-center text-center lg:grid-flow-col lg:grid-rows-2">
      <img
        src="./assets/supporters-perpetual-protocol.png"
        alt="perpetual-protocol"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-flashbots.png"
        alt="flashbots"
        className="row-span-1 w-28 object-contain"
      />
      <img
        src="./assets/supporters-hakka-finance.svg"
        alt="hakka-finance"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-ethereum-foundation.png"
        alt="ethereum-foundation"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-panther-protocol.png"
        alt="panther-protocol"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-light-protocol.svg"
        alt="light-protocol"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-sacred-finance.svg"
        alt="sacred-finance"
        className="row-span-1 w-48 object-contain"
      />
      <img
        src="./assets/supporters-fuel.png"
        alt="fuel"
        className="row-span-1 w-32 object-contain"
      />
    </div>

    <div className="custom-header">
      <h2 className="custom-header-title m-4 whitespace-normal">
        Our work has been supported by
      </h2>
      <h5>
        We build vertically-intergrated privacy products for the cryptocurrency
        space.
      </h5>
    </div>
    <div className="grid gap-4 grid-cols-1 items-center justify-center place-items-center text-center lg:grid-flow-col lg:grid-rows-1">
      <img
        src="./assets/supporters-esp.png"
        alt="esp"
        className='className="row-span-1 object-contain" w-48'
      />

      <img
        src="./assets/supporters-binance-fellowship.png"
        alt="binance"
        className='className="row-span-1 object-contain" w-48'
      />

      <img
        src="./assets/supporters-celo.png"
        alt="celo"
        className='className="row-span-1 object-contain" w-48'
      />
    </div>
  </div>
);

export default Supporters;
