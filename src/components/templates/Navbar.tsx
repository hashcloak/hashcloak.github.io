import React from 'react';
import { HashLink } from 'react-router-hash-link';
import BurgerMenu from 'components/organisms/BurgerMenu';

const Navbar: React.FunctionComponent = () => (
  <header className="custom-menu-bar fixed top-0">
    <HashLink to="#main" smooth className="mx-1 my-0 text-white">
      <img
        src="./assets/hashcloak_letters-md.png"
        alt="logo"
        className="h-10 object-contain lg:h-14"
      />
    </HashLink>
    <div className="hidden lg:flex lg:justify-between">
      <HashLink to="#mission" smooth className="mx-1 my-0 text-white">
        Mission
      </HashLink>
      <HashLink to="#products" smooth className="mx-1 my-0 text-white">
        Products
      </HashLink>
      <HashLink to="#services" smooth className="mx-1 my-0 text-white">
        Services
      </HashLink>
      <HashLink to="#research" smooth className="mx-1 my-0 text-white">
        Research
      </HashLink>
      <HashLink to="#supporters" smooth className="mx-1 my-0 text-white">
        Supporters
      </HashLink>
      <HashLink to="#announcements" smooth className="mx-1 my-0 text-white">
        Announcements
      </HashLink>
      <HashLink to="#contact" smooth className="mx-1 my-0 text-white">
        Contact
      </HashLink>
    </div>
    <div className="block lg:hidden">
      <BurgerMenu />
    </div>
  </header>
);

export default Navbar;
