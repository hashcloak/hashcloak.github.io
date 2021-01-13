import React from "react";
import Grid from "@material-ui/core/Grid";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    marginTop: "7rem",
    [breakpoints.down('sm')]: {
      marginLeft: "2rem",
    },
    [breakpoints.up('lg')]: {
      marginTop: "10rem",
    }
  },
  text: {
    fontSize: "3.0rem",
    fontFamily: "Liberation Sans",
    color: palette.primary.light,
    [breakpoints.down('md')]: {
      fontSize: "3.0rem",
    },
    [breakpoints.down('sm')]: {
      fontSize: "2.5rem",
    }
  },
  brandText: {
    fontSize: "3.0rem",
    color: palette.primary.main,
  },
  aboutText: {
    fontSize: "2rem",
    color: "#868686",
    width: "80%",
    padding: "2rem",
    textAlign: "center",
    position: "relative",
    left: "50%",
    "transform": "translate(-50%)",
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", },
    [breakpoints.down('md')]: {
      fontSize: "1.5rem",
      margin: 0,
    },
  },
  img: {
    width: "85%",
    [breakpoints.down('md')]: {
      width: "100%",
    }
  },
}));


const Landing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
        <div style={{ height: "4rem" }}></div>
        <Grid container alignItems="center" className={classes.container}>
          <Grid item md={7}>
            <img className={classes.img} src="/graphics/hashcloak-ice.png" alt="" />
          </Grid>
          <Grid item xs={12} md={5}>
            <h1 className={classes.text}>Privacy.</h1>
            <h1 className={classes.text}>Scalability.</h1>
            <h1 className={classes.text}>Distributed Systems.</h1>
            <h1 className={classes.brandText}>HashCloak.</h1>
          </Grid>
        </Grid>
        <p className={classes.aboutText}>Hashcloak is an independent research lab that targets problems surrounding privacy-preserving technologies and blockchain infrastructure design.</p>
      </LayoutContainer>
    </>
  )
}
export default Landing;