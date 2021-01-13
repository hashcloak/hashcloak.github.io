import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import nav from "./nav.svg";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#131313",
    padding: "0 1rem",
    position: "fixed",
    zIndex: 1000,
    borderBottom: `.8px solid ${palette.primary.main}`,
    [breakpoints.down('sm')]: {
      height: "60px",
    }
  },
  linksContainer: {
    position: "absolute",
    width: "100%",
    padding: "1.5rem",
  },
  navLinkContainer: {
    [breakpoints.up('md')]: {
      margin: "0 1rem",
    }
  },
  navLink: {
    color: palette.primary.light,
    textDecoration: "none",
    fontSize: "1.1rem",
    '&:hover': {
      borderBottom: `5px solid ${palette.primary.main}`
    },
  },
  brandName: {
    color: palette.primary.main,
    fontSize: "1.5rem",
  },
  menuToggle: {
    display: "none",
    width: "32px",
    marginTop: "10px",
    zIndex: 400000,
    height: "32px",
    transition: "transform 0.4s ease-in",
    [breakpoints.down(1170)]: {
      display: "block",
      cursor: "pointer",
      position: "absolute",
      right: "2rem",
      top: ".8rem",
    },
    [breakpoints.down('sm')]: {
      right: "1rem",
      top: "0.5rem"
    }
  },
  wrapper: {
    background: "black",
    position: "absolute",
    left: 0,
    width: "100%",
    height: "105vh",
    zIndex: 400000,
  },
  mobileLinkContainer: {
    zIndex: 1000,
    display: "flex",
    width: "100%",
    marginTop: "20vh",
    height: "auto",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileLinkWrapper: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileLink: {
    textDecoration: "none",
    fontSize: "3rem",
    color: palette.primary.light,
    '&:hover': {
      color: palette.primary.main,
      transition: "0.33s ease-in-out",
    },
    '&:active': {
      color: palette.primary.main,
      transition: "0.33s ease-in-out",
    },
  },
}))

const Navbar: React.FunctionComponent = () => {

  const classes = useStyles();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1170px)");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  return (
    <nav className={classes.container}>
      <Grid container justify="flex-start">
        <Grid item >
          <h1 className={classes.brandName}>HashCloak</h1>
        </Grid>
        <div className={classes.menuToggle} onClick={toggleNav}>
          <img src={nav} alt="menuIcon" />
        </div>
        {!isMobile && <Grid container justify="flex-end" className={classes.linksContainer}>

          <Grid item className={classes.navLinkContainer}>
            <a className={classes.navLink} href="#services">Services</a>
          </Grid>
          <Grid item className={classes.navLinkContainer}>
            <a className={classes.navLink} href="#research">Research</a>
          </Grid>
          <Grid item className={classes.navLinkContainer}>
            <a className={classes.navLink} href="#blogs">Blogs</a>
          </Grid>
          <Grid item className={classes.navLinkContainer}>
            <a className={classes.navLink} href="#newsletters">Newsletters</a>
          </Grid>
          <Grid item className={classes.navLinkContainer}>
            <a className={classes.navLink} href="#contact">Contact</a>
          </Grid>
        </Grid>}
        {(isMobile && isNavVisible) && (
          <div className={classes.wrapper}>
            <div className={classes.menuToggle} onClick={toggleNav} style={{ float: "right", margin: "0.7rem 0" }}>
              <img src={nav} alt="menuIcon" />
            </div>
            <ul className={classes.mobileLinkContainer}>
              <div className={classes.mobileLinkWrapper} >
                <a className={classes.mobileLink} target="_blank" rel="noopener noreferrer" href="https://write.as/hashcloak/">Blog</a>
              </div>
            </ul>
          </div>
        )}
      </Grid>
    </nav >
  );
};

export default Navbar;
