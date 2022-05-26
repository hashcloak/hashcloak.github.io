import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { slide as Menu } from 'react-burger-menu';

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <Menu
      right
      isOpen={isOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
      className="bm-btn"
    >
      <ul className="pt-5 px-5">
        <li id="react-burger-cross-btn">
          <HashLink to="#mission" smooth onClick={handleIsOpen}>
            Mission
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#products" smooth onClick={handleIsOpen}>
            Products
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#services" smooth onClick={handleIsOpen}>
            Services
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#research" smooth onClick={handleIsOpen}>
            Research
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#supporters" smooth onClick={handleIsOpen}>
            Supporters
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#announcements" smooth onClick={handleIsOpen}>
            Announcements
          </HashLink>
        </li>
        <li id="react-burger-cross-btn">
          <HashLink to="#contact" smooth onClick={handleIsOpen}>
            Contact
          </HashLink>
        </li>
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
