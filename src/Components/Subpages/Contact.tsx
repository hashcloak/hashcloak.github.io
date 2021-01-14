import React from "react";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"
import {InlineWidget} from 'react-calendly';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  container: {
    marginTop: "5rem",
  },
  title: {
    color: palette.primary.main, fontSize: "2rem",
    textAlign: "center",
    [breakpoints.down('sm')]: {
      fontSize: "1.4rem",
    },
  },
  text: {
    fontSize: "1.5rem",
    color: palette.primary.light,
    maxWidth: "600px",
    textAlign: "center",
    position: "relative",
    left: "50%",
    "transform": "translate(-50%)",
    [breakpoints.down('sm')]: {
      width: "100%",
    },
    '&:hover': { color: palette.primary.main, transition: "ease-in-out 0.2s", }
  },
}));


const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <div id="contact">
      <LayoutContainer>
        <div className={classes.container}>
          <h1 className={classes.title}>Contact</h1>
          <p className={classes.text}> Schedule a free 30 minute consultation session</p>
        <InlineWidget url="https://calendly.com/hashcloak/30min"/>
        </div>
      </LayoutContainer>
    </div>
  )
};

export default Contact;