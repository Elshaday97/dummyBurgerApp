import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const OrderSummary = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious healthy veggie burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <strong>
        <p>Total Price: {price.toFixed(2)}</p>
      </strong>
      <p>Continue to checkout!</p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={purchaseContinued}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
