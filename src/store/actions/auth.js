import * as actionTypes from "./actionTypes";
//import axios from "axios";
export const authStart = () => {
  //doesn't need a saga since it's a pure action creator
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFailure = (error) => {
  return {
    type: actionTypes.AUTH_FAILURE,
    error: error,
  };
};

export const logout = () => {
  // localStorage.removeItem("token");
  // localStorage.removeItem("expirationDate");
  // localStorage.removeItem("userId");

  return {
    // type: actionTypes.AUTH_LOGOUT,
    type: actionTypes.AUTH_INITIATE_LOGOUT, // dispatches to withAuth in saga/index.js
  };
};

export const logoutSucceed = () => {
  //action creator
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch(logout());
  //   }, expirationTime * 1000); // turn ms to sec
  // };
  return {
    type: actionTypes.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const auth = (email, password, isSignUp) => {
  return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSignUp: isSignUp,
  };
  
};
// if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data);
//   } else if (error.request) {
//     console.log(error.request);
//   } else {
//     console.log("Error", error.message);
//   }

export const setAuthRedirect = (path) => {
  return {
    type: actionTypes.AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  // return (dispatch) => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     dispatch(logout());
  //   } else {
  //     const expirationDate = new Date(localStorage.getItem("expirationDate")); //local storage returns a string and so change it into a date
  //     if (expirationDate <= new Date()) {
  //       //if exp date is <= now
  //       dispatch(logout());
  //     } else {
  //       const userId = localStorage.getItem("userId");
  //       dispatch(authSuccess(token, userId));
  //       dispatch(
  //         checkAuthTimeout(expirationDate.getTime() - new Date().getTime) / 1000
  //       );
  //     }
  //   }
  // };
  return {
    type: actionTypes.AUTH_CHECK_STATE,
  };
};
