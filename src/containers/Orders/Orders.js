import React, { Component } from "react";
import Order from "../../components/Order/Order";
import { connect } from "react-redux";
import axiosInstance from "../../components/axiosOrders";
//import * as actions from "../../store/actions/index";
class Orders extends Component {
  state = {
    orders: [],
  };
  componentDidMount() {
    //  this.props.onFetchOrders(this.props.token);
    const queryParams =
      "?auth=" +
      this.props.token +
      '&orderBy="userId"&equalTo="' +
      this.props.userId +
      '"';
    axiosInstance.get("/orders.json" + queryParams).then((res) => {
      const fetchedOrders = [];
      for (let key in res.data) {
        fetchedOrders.push({ ...res.data[key], id: key });
      }
      this.setState({ orders: fetchedOrders });
    });
    // .catch((err) => dispatch(fetchOrdersFailure(err)));
  }

  render() {
    return (
      <>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            orderIngredients={order.ingredients}
            price={+order.totalPrice}
          />
        ))}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
//   };
// };

export default connect(mapStateToProps)(Orders);
//export default Orders;
