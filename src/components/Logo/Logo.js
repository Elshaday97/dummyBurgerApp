import React from "react";
import logo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
const Logo = () => {
  return <img className={classes.Logo} src={logo} alt="MyVeggie" />;
};

export default Logo;
