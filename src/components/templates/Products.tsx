/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Products: React.FC = () => (
  <div className="custom-container-contents bg-tertiary-light" id="products">
    <div className="custom-header">
      <h2 className="custom-header-title m-4">Products</h2>
      <h5 className="font-bold">
        We build vertically-intergrated privacy products for the cryptocurrency
        space.
      </h5>
    </div>
    <div className="custom-contents">
      <div className="flex py-2.5 flex-col max-w-xs justify-center">
        <a
          href="https://mesonmix.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src="./assets/products-meson-logo.png"
            alt="meson"
            className="w-52 lg:w-64 object-contain"
            style={{ marginBottom: '-20px' }}
          />
          <h4>Meson</h4>
          <p className="text-secondary-dark mt-0 mb-1.5">
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
            />
          </a>
        </div>
      </div>
      <div className="flex py-2.5 flex-col max-w-xs justify-center">
        <a
          href="https://mesonmix.net/wallet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src="./assets/products-mesonSafe-logo.png"
            alt="meson-safe"
            className="object-contain w-36 lg:w-44 m-2.5"
          />
          <h4>MesonSafe</h4>
          <p className="text-secondary-dark mt-0 mb-1.5">
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
            />
          </a>
        </div>
      </div>
      <div className="flex py-2.5 flex-col max-w-xs">
        <a
          href="https://stoffelmpc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center"
        >
          <img
            src="./assets/products-stoffelMPC-logo.png"
            alt="stoffelMPC"
            className="object-contain w-36 lg:w-44 m-2.5"
          />
          <h4>StoffelMPC</h4>
          <p className="text-secondary-dark mt-0 mb-1.5">
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
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
              className="object-contain w-7 mx-2.5"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Products;
