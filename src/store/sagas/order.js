import { put } from "redux-saga/effects";
import axiosInstance from "../../components/axiosOrders";
import * as actions from "../actions/index";
export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axiosInstance.post(
      "/orders.json?auth=" + action.token,
      action.orderData
    );
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    console.log("Error:", error);
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrdersStart());
  try {
    const response = yield axiosInstance.get(
      "/orders.json?auth=" + this.props.token
    );
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({ ...response.data[key], id: key });
    }
    yield put(actions.fetchOrdersSuccess(action.fetchOrders));
  } catch (error) {
    console.log("Error:" + error);
  }
}
