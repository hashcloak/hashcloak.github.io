import React from "react";
import Grid from "@material-ui/core/Grid";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    marginTop: "2rem",
  },
  textContainer: {
    [breakpoints.down('sm')]: {
      marginLeft: "7%",
    },
    [breakpoints.up('md')]: {
      marginLeft: "10%",
    },
    [breakpoints.up('lg')]: {
      marginLeft: "10%",
    }
  },
  title: {
    color: palette.primary.main, fontSize: "2rem",
    textAlign: "center",
    [breakpoints.down('sm')]: {
      fontSize: "1.4rem",
    },
  },
  logoContainer: {
    marginLeft: "10%",
  },
  img: {
    //width: "30%",
    margin: "2rem 0",
    paddingRight: "3rem",
    position: "relative",
    left: "30%",
    "transform": "translate(-50%)",
    [breakpoints.down('lg')]: {
      width: "40%",
    },
    [breakpoints.down('xs')]: {
      width: "100%",
      margin: 0,
    },
    [breakpoints.up('xl')]: {
      margin: 0,
      width: "40%",
    }
  },
}));


const Clients: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
        <Grid container alignItems="center" justify="center" className={classes.container}>
          <Grid item xs={12} className={classes.textContainer}>
            <h1 className={classes.title}>Clients We've Collaborated With:</h1>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center" className={classes.logoContainer}>
          <Grid item xs={6} >
            <img className={classes.img} src="/logos/fuel.png" alt="Fuel Labs" />
          </Grid>
          <Grid item xs={6} >
            <img className={classes.img} src="/logos/celo.png" alt="Celo" />
          </Grid>
        </Grid>
        <Grid container alignItems="center" justify="center" className={classes.container}>
          <Grid item xs={12} className={classes.textContainer}>
            <h1 className={classes.title}>Research At HashCloak Is Supported By:</h1>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="center" className={classes.logoContainer}>
          <Grid item xs={6} >
            <img className={classes.img} src="/logos/binance.png" alt="Fuel Labs" />
          </Grid>
          <Grid item xs={6} >
            <img className={classes.img} src="/logos/esp.png" alt="Celo" />
          </Grid>
        </Grid>
      </LayoutContainer>
    </>
  )
}
export default Clients;