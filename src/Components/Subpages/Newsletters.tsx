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
      text: {
        color: palette.primary.light,
        fontSize: "1.1rem",
        textAlign: "center",
        position: "relative",
        left: "1%",
        "transform": "translate(-50%)",
        '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", },
            [breakpoints.down('md')]: {
            fontSize: "1rem",
            margin: 0,
    },
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


const Newsletters: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <LayoutContainer>
        <Grid container alignItems="center" justify="center" className={classes.container}>
          <Grid item xs={12} className={classes.textContainer}>
            <h1 className={classes.title}>Newsletters</h1>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" justify="space-evenly" className={classes.logoContainer}>
            <Grid item xs={3} sm={3} >
            <a href="https://hashcloak.substack.com/" className={classes.link}>
                <h2 className={classes.blogTitle}>HashCloak Newsletter</h2>
                <p className={classes.text}>Periodic updates about current HashCloak projects and offerings</p>
                <img className={classes.img} src="/graphics/noun_newsletter_31729.png" alt="Newsletter - Graphic: newsletter by PJ Souders from the Noun Project" />
                </a>
            </Grid>
            <Grid item xs={3} sm={3} >
            <a href="https://zkmesh.substack.com/" className={classes.link}>
                <h2 className={classes.blogTitle}>ZKMesh Newsletter</h2>
                <p className={classes.text}>Monthly Newsletter on privacy-preserving tech with Anna Rose of the ZKPodcast</p>
                <img className={classes.img} src="/graphics/noun_newsletter_957339.png" alt="Announcement - Graphic: newsletter by Lara  from the Noun Project" />
            </a>
            </Grid>
        </Grid>
      </LayoutContainer>
    </>
  )
}
export default Newsletters;