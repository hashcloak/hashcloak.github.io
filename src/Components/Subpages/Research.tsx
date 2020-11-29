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
    color: palette.primary.dark,
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
          <Grid item justify="center" xs={12} md={6} className={classes.textContainer}>
            <h1 className={classes.title}>Research</h1>
            <h1 className={classes.subhead}>{currentYear}</h1>
            <p >
              <a className={classes.text} href="https://hashcloak.com">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
              </a>
            </p>
            <p >
              <a className={classes.text} href="https://hashcloak.com">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
              </a>
            </p>
            <h1 className={classes.subhead}>2019</h1>
            <p >
              <a className={classes.text} href="https://hashcloak.com">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
              </a>
            </p>
            <p >
              <a className={classes.text} href="https://hashcloak.com">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
              </a>
            </p>
            <p >
              <a className={classes.text} href="https://hashcloak.com">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
              </a>
            </p>
          </Grid>
          <Grid item xs={12} md={6} className={classes.textContainer}>
            <h1 className={classes.subhead}>Open Research Problems</h1>
            <p className={classes.text} >
              Open Research Problem 1
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
            </p>
            <p className={classes.text} >
              Open Research Problem 1
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
            </p>
            <p className={classes.text} >
              Open Research Problem 1
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
            </p>
            <p className={classes.text} >
              Open Research Problem 1
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              arcu sapien, rutrum vitae volutpat ac, blandit nec nulla.{" "}
            </p>
          </Grid>
        </Grid>
      </LayoutContainer>
    </div>
  )
}
export default Research;