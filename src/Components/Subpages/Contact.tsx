import React from "react";
import LayoutContainer from "../Modules/LayoutContainer";
import { makeStyles } from "@material-ui/core/styles"
import { useRef, useEffect } from 'react';
import * as typeformEmbed from "@typeform/embed";


const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    marginTop: "5rem",
  },
  contactForm: {
    width: "100%", height: "70vh",
    [breakpoints.up(3800)]: {
      height: "50vh",
    }
  },
}));





const Contact: React.FC = () => {
  const classes = useStyles();
  const typeformRef = useRef(null);

  useEffect(() => typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/sDcIwgCP', {
    hideFooter: true,
    hideHeaders: false,
  }), [typeformRef]);

  return (
    <div id="contact">
      <LayoutContainer>
        <div className={classes.container}>
          <div ref={typeformRef} className={classes.contactForm}></div>
        </div>
      </LayoutContainer>
    </div>
  )
}
export default Contact;