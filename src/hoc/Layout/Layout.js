import React from "react";
import classes from "./Layout.module.css";
import Aux from "../Aux"; //higher order component for a wrapping root element
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
//import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
//contains toolbar, sidebar and backdrop

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
