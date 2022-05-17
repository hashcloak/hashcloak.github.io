import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BurgerMenu from 'components/organisms/BurgerMenu';

const Navbar: React.FunctionComponent = () => (
  <header className="bg-gradient-to-r from from-tertiary-main to-black flex items-center justify-between z-50 w-full top-0	custom-box-box-shadow custom-container py-3 fixed">
    <HashLink to="#main" smooth className="text-white my-0 mx-1">
      <img
        src="./assets/company-logo.png"
        alt="logo"
        className="object-contain w-24 sm:w-full"
      />
    </HashLink>
    <div className="lg:flex hidden lg:justify-between">
      <HashLink to="#mission" smooth className="text-white my-0 mx-1">
        Mission
      </HashLink>
      <HashLink to="#products" smooth className="text-white my-0 mx-1">
        Products
      </HashLink>
      <HashLink to="#services" smooth className="text-white my-0 mx-1">
        Services
      </HashLink>
      <HashLink to="#research" smooth className="text-white my-0 mx-1">
        Research
      </HashLink>
      <HashLink to="#supporters" smooth className="text-white my-0 mx-1">
        Supporters
      </HashLink>
      <HashLink to="#announcements" smooth className="text-white my-0 mx-1">
        Announcements
      </HashLink>
      <HashLink to="#contact" smooth className="text-white my-0 mx-1">
        Contact
      </HashLink>
    </div>
    <div className="lg:hidden block">
      <BurgerMenu />
    </div>
  </header>
);

export default Navbar;
