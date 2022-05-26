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
      noOverlay
      className="my-menu"
    >
      <HashLink to="#mission" smooth onClick={handleIsOpen}>
        Mission
      </HashLink>

      <HashLink to="#products" smooth onClick={handleIsOpen}>
        Products
      </HashLink>

      <HashLink to="#services" smooth onClick={handleIsOpen}>
        Services
      </HashLink>

      <HashLink to="#research" smooth onClick={handleIsOpen}>
        Research
      </HashLink>

      <HashLink to="#supporters" smooth onClick={handleIsOpen}>
        Supporters
      </HashLink>

      <HashLink to="#announcements" smooth onClick={handleIsOpen}>
        Announcements
      </HashLink>

      <HashLink to="#contact" smooth onClick={handleIsOpen}>
        Contact
      </HashLink>
    </Menu>
  );
};

export default BurgerMenu;
