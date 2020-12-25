import * as actionTypes from "./actionTypes";
//import axiosInstance from "../../components/axiosOrders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const initIngredients = () => {
  // return (dispatch) => {
  //   axiosInstance
  //     .get("https://dummyburgerapp.firebaseio.com/Ingredients%20.json")
  //     .then((res) => {
  //       dispatch(setIngredients(res.data));
  //     })
  //     .catch((err) => console.log("Error:", err));
  // };
  return {
    type: actionTypes.INIT_INGREDIENTS,
  };
};
