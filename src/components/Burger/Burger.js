import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients) //change object to arrays
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        //creates multiple arrays, each for the igKey
        return <BurgerIngredient key={igKey + i} types={igKey} />;
      });
    })
    //transforms an array to sth else. It takes a function as an input which takes two args, prev value and current val
    .reduce((arr, el) => {
      //executed on every element
      return arr.concat(el); //add the new to the old
    }, []);
  // console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient types="bread-top" />
      {transformedIngredients}
      <BurgerIngredient types="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
