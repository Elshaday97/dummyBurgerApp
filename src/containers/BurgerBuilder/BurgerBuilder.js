import React, { Component } from "react";
import { connect } from "react-redux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Aux";
import axiosInstance from "../../components/axiosOrders";
import * as actionTypes from "../../store/actions";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
//import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
//import axios from "axios";

//the root component that handles state
class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://dummyburgerapp.firebaseio.com/Ingredients%20.json")
    //   .then((res) => {
    //     this.setState({ ingredients: res.data });
    //   });
  }
  purchaseContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   ); //encode the elements such that they can be used in the url
    // }
    // queryParams.push("price=" + this.state.totalPrice);
    // const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      // search: "?" + queryString,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0; //returns true or false
  };

  render() {
    const disabledInfo = {
      ...this.props.ings, //state from store
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //returns true or false
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.props.ings}
            price={this.props.price}
            purchaseContinued={this.purchaseContinueHandler}
            purchaseCancelled={this.purchaseCancelHandler}
          />
        </Modal>
        <Burger ingredients={this.props.ings} />
        <BuildControls
          ingredientAdded={this.props.onIngredientAdded}
          ingredientDeleted={this.props.onIngredientRemoved}
          price={this.props.price}
          disabled={disabledInfo}
          purchaseable={this.updatePurchaseState(this.props.ings)}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  //receives the state and returns a javascript obj
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (igName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: igName }),
    onIngredientRemoved: (igName) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: igName }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axiosInstance));
