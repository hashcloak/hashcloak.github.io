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
    [breakpoints.down('sm')]: {
      fontSize: "1.4rem",
    },
  },
  logoContainer: {
    marginLeft: "10%",
  },
  link: {
      textDecoration: "none",
  },
  blogTitle: {
      color: palette.primary.light,
      backgroundColor: palette.primary.main,
      borderRadius: "1rem",
      textAlign: "center",
      position: "relative",
      left: "1%",
      "transform": "translate(-50%)",
  },
  img: {
    margin: "2rem 0",
    paddingRight: "0rem",
    position: "relative",
    backgroundColor: palette.primary.main,
    borderRadius: "1rem",
    left: "1%",
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


const Blogs: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
        <Grid container alignItems="center" justify="center" className={classes.container}>
          <Grid item xs={12} className={classes.textContainer}>
            <h1 className={classes.title}>Blogs</h1>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="space-evenly" className={classes.logoContainer}>
            <Grid item xs={3} sm={3} >
            <a href="https://write.as/hashcloak-research/" className={classes.link}>
                <h2 className={classes.blogTitle}>Research</h2>
                <img className={classes.img} src="/graphics/noun_Science_3306446.png" alt="Research - Graphic: Science by Vectors Point from the Noun Project" />
                </a>
            </Grid>
            <Grid item xs={3} sm={3} >
            <a href="https://write.as/hashcloak-announcements-and-updates/" className={classes.link}>
                <h2 className={classes.blogTitle}>Announcements and Updates</h2>
                <img className={classes.img} src="/graphics/noun_Announcement_3166042.png" alt="Announcement - Graphic: Announcement by Flatart from the Noun Project" />
            </a>
            </Grid>
        </Grid>
      </LayoutContainer>
    </>
  )
}
export default Blogs;