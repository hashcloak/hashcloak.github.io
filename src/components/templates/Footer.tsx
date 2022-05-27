import React from 'react';
import SocialMedia from 'components/organisms/SocialMedia';

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-menu-bar items-center">
      <div>
        <p className="m-0 text-white">{currentYear} HashCloak Inc.</p>
      </div>
      <div>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
