import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationItems.module.css";
const NavigationItems = ({ isAuthenticated }) => {
  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavigationItems}>
        <li>
          <Link to="/">Burger Builder</Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        ) : null}
        {!isAuthenticated ? (
          <li>
            <Link to="/auth">Authenticate</Link>
          </li>
        ) : (
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationItems;
