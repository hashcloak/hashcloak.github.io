import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';
import BurgerMenu from 'components/organisms/BurgerMenu';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, #2eb3ff, #000000)',
    padding: '.7rem 18rem',
    position: 'fixed',
    top: '0',
    width: '100%',
    boxShadow: '0 1px 1px -1px rgba(0, 0, 0, 0.5)',
    zIndex: 99,
    [breakpoints.down('md')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('sm')]: {
      paddingRight: '8rem',
      paddingLeft: '8rem',
    },
    [breakpoints.down('xs')]: {
      paddingRight: '2rem',
      paddingLeft: '2em',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    color: 'white',
    margin: '0 4px',
  },
  burger: {
    display: 'none',
    [breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  logo: {
    [breakpoints.down('xs')]: {
      objectFit: 'contain',
      width: '100px',
    },
  },
}));

const Navbar: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <header className="bg-gradient-to-r from from-tertiary-main to-black flex items-center justify-between z-50 w-full top-0	custom-box-box-shadow custom-container xl:px-72 py-3 ">
      <HashLink to="#main" smooth className="text-white my-0 mx-1">
        <img
          src="./assets/company-logo.png"
          alt="logo"
          className="object-contain w-24 sm:w-full"
        />
      </HashLink>
      <div className={classes.content}>
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
      <div className={classes.burger}>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Navbar;
