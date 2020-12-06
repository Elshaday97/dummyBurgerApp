import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    soy: 0,
  },
  totalPrice: 4,
};
const ING_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  soy: 1.3,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1, //overwrite the ingredient from the payload. Use square brackets to dynamically overwrite a property of an object
        },
        totalPrice: state.totalPrice + ING_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - ING_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;
