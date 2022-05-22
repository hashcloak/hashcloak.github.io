import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const titleForClients = 'Clients';
const titleForGrants = 'Our work has been supported by';
const description =
  'We build vertically-intergrated privacy products for the cryptocurrency space.';

const Supporters: React.FC = () => (
  <BaseContainer
    id="supporters"
    bg="bg-gradient-to-tl from-secondary-light to-secondary-main"
  >
    <TitleHeader title={titleForClients} description={description} />

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

    <TitleHeader title={titleForGrants} />

    <div className="grid gap-4 grid-cols-1 items-center justify-center place-items-center text-center lg:grid-flow-col lg:grid-rows-1">
      <img
        src="./assets/supporters-esp.png"
        alt="esp"
        className='object-contain" row-span-1 w-48'
      />

      <img
        src="./assets/supporters-binance-fellowship.png"
        alt="binance"
        className='object-contain" row-span-1 w-48'
      />

      <img
        src="./assets/supporters-celo.png"
        alt="celo"
        className='object-contain" row-span-1 w-48'
      />
    </div>
  </BaseContainer>
);

export default Supporters;
