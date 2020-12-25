import React from "react";
import { connect } from "react-redux";
import classes from "./Layout.module.css";
import Aux from "../Aux"; //higher order component for a wrapping root element
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
//import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
//contains toolbar, sidebar and backdrop

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar isAuth={props.isAuthenticated} />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null, //returns true or false
  };
};

export default connect(mapStateToProps)(Layout);
