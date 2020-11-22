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
    fontSize: "3.5rem",
    fontFamily: "Inter",
    color: palette.primary.light,
    [breakpoints.down('md')]: {
      fontSize: "3.5rem",
    },
    [breakpoints.down('sm')]: {
      fontSize: "2.5rem",
    }
  },
  brandText: {
    fontSize: "3.5rem",
    color: palette.primary.main,
  },
  aboutText: {
    fontSize: "2.5rem",
    color: palette.primary.light,
    width: "80%",
    margin: "0 2rem",
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", },
    [breakpoints.up('lg')]: {
      margin: "0 auto",
    },
    [breakpoints.down('md')]: {
      fontSize: "1.8rem",
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
            <img className={classes.img} src="/hashcloak-react/graphics/hashcloak-ice.png" alt="" />
          </Grid>
          <Grid item xs={12} md={5}>
            <h1 className={classes.text}>Privacy.</h1>
            <h1 className={classes.text}>Scalability.</h1>
            <h1 className={classes.text}>Distributed Systems.</h1>
            <h1 className={classes.brandText}>Hashcloak.</h1>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <p className={classes.aboutText}>Hashcloak is an independent research lab that targets problems surrounding privacy-preserving technologies and blockchain infrastructure design.</p>
        </Grid>
      </LayoutContainer>
    </>
  )
}
export default Landing;