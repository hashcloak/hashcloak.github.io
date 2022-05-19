/* eslint-disable jsx-a11y/anchor-is-valid */
import BaseContainer from 'components/organisms/BaseContainer';
import TitleHeader from 'components/organisms/TitleHeader';
import React from 'react';

const title = 'Products';
const description =
  'We build vertically-intergrated privacy products for the cryptocurrency space.';

const Products: React.FC = () => (
  <BaseContainer bg="bg-tertiary-light" id="products">
    <TitleHeader title={title} description={description} />

    <div className="custom-contents w-full">
      <div className="custom-contents-item">
        <a
          href="https://mesonmix.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img
            src="./assets/products-meson-logo.png"
            alt="meson"
            className="inline w-36 object-contain lg:w-48"
          />
          <h5>Meson</h5>
          <p className="mb-1.5 mt-0 text-secondary-dark">
            A mix network for cryptocurrency transactions
          </p>
        </a>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/MesonMixnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/twitter-logo.png"
              alt="twitter"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
          <a
            href="https://docs.mesonmix.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/github-logo-black.png"
              alt="github"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
          <a
            href="https://app.element.io/#/room/#meson-community:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/element-logo.svg"
              alt="element"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
        </div>
      </div>
      <div className="custom-contents-item">
        <a
          href="https://mesonmix.net/wallet"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img
            src="./assets/products-mesonSafe-logo.png"
            alt="meson-safe"
            className="inline p-4 w-36 object-contain lg:w-48"
          />
          <h5>MesonSafe</h5>
          <p className="mb-1.5 mt-0 text-secondary-dark">
            A privacy-focused wallet for managing your crypto assets
          </p>
        </a>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/MesonMixnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/twitter-logo.png"
              alt="twitter"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
          <a
            href="https://docs.mesonmix.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/github-logo-black.png"
              alt="github"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
        </div>
      </div>
      <div className="custom-contents-item">
        <a
          href="https://stoffelmpc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <img
            src="./assets/products-stoffelMPC-logo.png"
            alt="stoffelMPC"
            className="inline pt-8 w-36 object-contain lg:w-48"
          />
          <h5>StoffelMPC</h5>
          <p className="mb-1.5 mt-0 text-secondary-dark">
            A framework for building expressive confidential blockchain
            applications using multiparty computation (MPC)
          </p>
        </a>
        <div className="flex justify-center">
          <a
            href="https://twitter.com/StoffelFinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/twitter-logo.png"
              alt="twitter"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
          <a
            href="https://github.com/hashcloak/stoffelMPC"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/github-logo-black.png"
              alt="github"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
          <a
            href="https://cryptpad.fr/form/#/3/form/view/3b4ed9a8bde9ba12924acdd86fad2a39/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/products-developer-survey.svg"
              alt="developer-survey"
              className="mx-2.5 w-7 object-contain"
              style={{ width: '25px' }}
            />
          </a>
          <a
            href="https://docs.stoffelmpc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./assets/products-mkbook.png"
              alt="documentation"
              className="mx-2.5 w-7 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  </BaseContainer>
);

export default Products;
