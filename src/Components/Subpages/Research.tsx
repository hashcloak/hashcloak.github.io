import React from "react";
import Grid from "@material-ui/core/Grid";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    marginBottom: "2rem",
    marginTop: "2rem",
    maxWidth: "2650px",
    display: "flex",
    alignItems: "flex-end",
    [breakpoints.up('xl')]: {
      marginTop: "5rem",
    }
  },
  textContainer: {
    padding: "2rem",
    "& > p": {
      maxWidth: "600px",
      [breakpoints.down('sm')]: {
        width: "100%",
      }
    }
  },
  title: {
    color: palette.primary.main, fontSize: "2rem",
    [breakpoints.up('lg')]: {
      fontSize: "2.8rem"
    }
  },
  subhead: { color: palette.primary.light, fontSize: "1.25rem", },
  text: {
    fontSize: "1.1rem",
    color: palette.primary.light,
    maxWidth: "600px",
    [breakpoints.down('sm')]: {
      width: "100%",
    },
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", }
  },
  viewAll: {
    fontSize: "1.5rem", color: palette.primary.light,
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s" },
  },
  img: {
    width: "85%",
    [breakpoints.down('md')]: {
      width: "100%",
    },
  },
}));

const currentYear = new Date().getFullYear();


const Research: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="research">
      <LayoutContainer>
        <Grid container alignItems="center" className={classes.container}>
          <Grid item xs={12} className={classes.textContainer}>
            <h1 className={classes.title}>Research</h1>
            <p className={classes.text}>Here is a taste of the research we conduct and open problems we are currently tackling.</p>
          </Grid>
          <Grid item justify="center" xs={12} sm={6} className={classes.textContainer}>
            <h1 className={classes.subhead}>{currentYear}</h1>
            <p >
              <a className={classes.text} href="#">
                An Empirical Analysis of Ethereum as a Randomness Beacon (Ongoing){" "}
              </a>
            </p>
            <p>
              <a className={classes.text} href="#">
                SoK on Universal SNARK constructions (Ongoing){" "}
              </a>
            </p>
            <p >
              <a className={classes.text} href="https://github.com/hashcloak/katzenmint-pki">
                Katzenmint: A Decentralized PKI System for Anonymous Communication Networks (Ongoing){" "}
              </a>
            </p>
            <p >
              <a className={classes.text} href="#">
                Towards a Dynamic Parameterization Algorithm for the Loopix Anonymity Systems (Ongoing) {" "}
              </a>
            </p>
            <h1 className={classes.subhead}>2020</h1>
            <p >
              <a className={classes.text} href="https://arxiv.org/abs/2005.14051">
                Blockchain is Watching You: Profiling and Deanonymizing Ethereum Users{" "}
              </a>
            </p>
            <h1 className={classes.subhead}>2019</h1>
            <p >
              <a className={classes.text} href="https://eprint.iacr.org/2019/1111">
                Short Paper: Towards Characterizing Sybil Attacks in Cryptocurrency Mixers{" "}
              </a>
            </p>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.textContainer}>
            <h1 className={classes.subhead}>Open Research Problems</h1>
            <p className={classes.text} >
              TBA
            </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Grid>
        </Grid>
      </LayoutContainer>
    </div>
  )
}
export default Research;