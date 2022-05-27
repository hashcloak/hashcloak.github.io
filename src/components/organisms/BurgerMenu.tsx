/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const BurgerMenu: React.FC = () => (
  <>
    <div className="flex justify-end">
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="right-0 top-0 items-center place-items-end p-1 h-full text-sm border-2 rounded-lg focus:outline-none"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div className="right-0 hidden w-full md:w-auto lg:block" id="mobile-menu">
      <ul className="flex flex-col mt-4">
        <li>
          <HashLink
            to="#mission"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Mission
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#products"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Products
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#services"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Services
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#research"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Research
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#supporters"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Supporters
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#announcements"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Announcements
          </HashLink>
        </li>
        <li>
          <HashLink
            to="#contact"
            smooth
            className="block pl-3 pr-4 py-2 text-left text-white md:p-0 md:border-0"
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  </>
);

export default BurgerMenu;
