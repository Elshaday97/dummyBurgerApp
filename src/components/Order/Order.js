import React from "react";
import classes from "./Order.module.css";
const Order = ({ orderIngredients, price }) => {
  const ingredients = [];
  for (let ingredientName in orderIngredients) {
    //convert obj to an array
    ingredients.push({
      name: ingredientName,
      amount: orderIngredients[ingredientName],
    });
  }
  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "7px",
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput} </p>
      <p>
        Price: <strong>USD {price.toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default Order;
