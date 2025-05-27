/* import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core/styles";

type ContainerProps = {
  children?: ReactNode;
  id?: string;
};

const useStyles = makeStyles(({ breakpoints }) => ({
  section: {
    background: "#141414",
    overflowX: "hidden",
    padding: "0",
    margin: "0 auto",
    position: "relative",
    [breakpoints.up('lg')]: {
      maxWidth: "1504px",
    },
    [breakpoints.up('xl')]: {
      maxWidth: "1504px",
    },
  }
}))


const LayoutContainer = ({
  children,
}: ContainerProps) => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.section}>
        {children}
      </section>
    </>
  );
};

export default LayoutContainer;
 */

export {}