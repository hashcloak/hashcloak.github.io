import React from "react";
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    borderTop: "0.5px solid #1F2223",
    padding: ".5rem 2rem",
    zIndex: 2000,
    height: "80px",
    marginTop: "100px",
    "& > small": {
      marginRight: "1rem",
    }
  },
  small: {
    fontSize: "14px",
    color: "#868686",
    [breakpoints.down('sm')]: {
      fontSize: "12px",
    },

  }
}))

const Footer: React.FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.container}>
      <small className={classes.small}>
        {currentYear} HashCloak Inc.
      </small>
      <small className={classes.small}>
        Designed and developed by @sweetpea22 (twitter).
      </small>
    </footer>
  );
};

export default Footer;
