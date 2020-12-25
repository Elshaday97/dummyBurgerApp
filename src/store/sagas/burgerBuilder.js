import axiosInstance from "../../components/axiosOrders";
import * as actions from "../actions/index";
import { put } from "redux-saga/effects";
export function* initIngredientsSaga(action) {
  try {
    const response = yield axiosInstance.get(
      "https://dummyburgerapp.firebaseio.com/Ingredients%20.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    console.log("Error:", error);
  }
}
