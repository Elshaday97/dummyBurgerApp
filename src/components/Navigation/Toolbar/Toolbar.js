import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <nav>...</nav>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <NavigationItems isAuthenticated={props.isAuth} />
    </header>
  );
};

export default Toolbar;
