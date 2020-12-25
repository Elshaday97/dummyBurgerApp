import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Soy", type: "soy" },
];
const BuildControls = ({
  ingredientDeleted,
  ingredientAdded,
  price,
  disabled,
  purchaseable,
  ordered,
  isAuth,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => ingredientAdded(control.type)}
          deleted={() => ingredientDeleted(control.type)}
          disabled={disabled[control.type]}
        />
      ))}
      <button
        onClick={ordered}
        disabled={!purchaseable}
        className={classes.OrderButton}
      >
        {isAuth ? "Order Now" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
