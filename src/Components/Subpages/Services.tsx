import React from "react";
import Grid from "@material-ui/core/Grid";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    [breakpoints.up('lg')]: {
      marginTop: "3rem",
    },
    [breakpoints.up('xl')]: {
      marginTop: "5rem",
    }
  },
  textContainer: {
    padding: "2rem"
  },
  title: {
    color: palette.primary.main, fontSize: "2rem",
    [breakpoints.up('lg')]: {
      fontSize: "2.8rem"
    }
  },
  subhead: { color: palette.primary.light, fontSize: "1.1rem", },
  text: {
    fontSize: "1.5rem",
    color: palette.primary.light,
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", },
    [breakpoints.down('md')]: {
      fontSize: "1.5rem",
      margin: 0,
    }
  },
  img: {
    width: "85%",
    [breakpoints.down('md')]: {
      width: "100%",
    }
  },
}));


const Services: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="services">
      <LayoutContainer>
        <Grid container alignItems="center" className={classes.container}>
          <Grid item xs={12} md={5} className={classes.textContainer}>
            <h1 className={classes.title}>Services</h1>
            <p className={classes.text}>Smart contract audits</p>
            <p className={classes.text}>Privacy audits</p>
            <p className={classes.text}>Cryptographic implementation audits</p>
            <p className={classes.text}>Bespoke R&D for blockchain-related projects</p>
            <p className={classes.text}>General Cryptography and Blockchain consulting</p>
          </Grid>
          <Grid item xs={12} md={7}>
            <img className={classes.img} src="/graphics/hc-contract.png" alt="3d rendering of smart contract with a lock" />
          </Grid>
        </Grid>
      </LayoutContainer>
    </div>
  )
}
export default Services;