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
      className="bm-start"
    >
      <ul className="pt-5 px-5">
        <li>
          <HashLink to="#mission" smooth onClick={handleIsOpen}>
            Mission
          </HashLink>
        </li>
        <li>
          <HashLink to="#products" smooth onClick={handleIsOpen}>
            Products
          </HashLink>
        </li>
        <li>
          <HashLink to="#services" smooth onClick={handleIsOpen}>
            Services
          </HashLink>
        </li>
        <li>
          <HashLink to="#research" smooth onClick={handleIsOpen}>
            Research
          </HashLink>
        </li>
        <li>
          <HashLink to="#supporters" smooth onClick={handleIsOpen}>
            Supporters
          </HashLink>
        </li>
        <li>
          <HashLink to="#announcements" smooth onClick={handleIsOpen}>
            Announcements
          </HashLink>
        </li>
        <li>
          <HashLink to="#contact" smooth onClick={handleIsOpen}>
            Contact
          </HashLink>
        </li>
      </ul>
    </Menu>
  );
};

export default BurgerMenu;
