import React from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux"; //higher order component for a wrapping root element
import Toolbar from "../Navigation/Toolbar/Toolbar";
//contains toolbar, sidebar and backdrop

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <div>Toolbar, sidebar, backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
