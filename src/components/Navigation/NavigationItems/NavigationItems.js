import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";
const NavigationItems = () => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavigationItems}>
        <li>
          <Link to="/">Burger Builder</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationItems;
