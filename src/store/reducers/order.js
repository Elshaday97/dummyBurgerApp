import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false, //use when applying spinner
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
        purchased: true,
      };
      return {
        ...state,
        orders: state.orders.concat(newOrder),
        loading: false,
      };
    // case actionTypes.PURCHASE_BURGER_FAILURE:
    //   return {};
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.FETCH_ORDERS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
