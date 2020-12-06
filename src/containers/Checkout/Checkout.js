import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
//import classes from "./Checkout.module.css";

class Checkout extends Component {
  // state = {
  //   ingredients: {},
  //   totalPrice: 0,
  // };
  // componentDidMount() {
  //   //extract the query params
  //   const query = new URLSearchParams(this.props.location.search);
  //   const ingredients = {};
  //   let price = 0;
  //   for (let param of query.entries()) {
  //     // ['salad', '1']
  //     if (param[0] === "price") {
  //       price = param[1];
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }
  //   }
  //   this.setState({ ingredients, totalPrice: price });
  // }
  CheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  CheckoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <>
        <CheckoutSummary
          ingredients={this.props.ings}
          onCheckoutContinued={this.CheckoutContinuedHandler}
          onCheckoutCancelled={this.CheckoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
