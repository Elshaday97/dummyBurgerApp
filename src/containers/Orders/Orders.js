import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axiosInstance from "../../components/axiosOrders";
class Orders extends Component {
  state = {
    orders: [],
  };
  componentDidMount() {
    axiosInstance
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders });
      })
      .catch((err) => console.log("Error:" + err));
  }
  render() {
    console.log(this.state.orders);
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

export default Orders;
