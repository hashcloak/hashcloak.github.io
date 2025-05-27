import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const title = 'Services';

const Services: React.FC = () => (
  <BaseContainer id="services">
    <TitleHeader title={title} />

    <div className="custom-contents lg:items-start">
      <div className="custom-contents-item">
        <img src="./assets/services-bespoke.png" alt="Bespoke" />
        <h5 className="py-1 font-bold lg:py-2">Bespoke R&amp;D</h5>
        <p className="text-secondary-dark">
          Have a problem that can leverage anonymous network, ZKPs, MPC or
          another privacy enhancing technique? We can help get you started and
          assist your team with the initial prototyping phase of integrating
          these tools into your product.
        </p>
      </div>
      <div className="custom-contents-item">
        <img src="./assets/services-audits.png" alt="security-audits" />
        <h5 className="py-1 font-bold lg:py-2">Security Audits</h5>
        <p className="text-secondary-dark">
          We assist teams to securely integrate advanced cryptographic tooling
          into their product and conduct security reviews towards that end.
        </p>
      </div>
      <div className="custom-contents-item">
        <img src="./assets/services-advisory.png" alt="advisory" />
        <h5 className="py-1 font-bold lg:py-2">Advisory</h5>
        <p className="text-secondary-dark">
          Need someone that can stay on top of the ongoings in the crypto
          (graphy and currency) space in order to get a step ahead of the
          competition? We assist teams with developing strategies with respect
          to privacy enhancing technology in the fast moving cryptocurrency
          industry
        </p>
      </div>
    </div>
  </BaseContainer>
);

export default Services;
