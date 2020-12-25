import { put, delay } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as actionTypes from "../actions/actionTypes";

import axios from "axios";
export function* logoutSaga(action) {
  //generator function
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  // yield put(actions.logoutSucceed()); // logoutSucceed executes type: actionTypes.AUTH_LOGOUT
  yield put({
    type: actionTypes.AUTH_LOGOUT,
  }); // instead of dispatching an action in here, handle all actions in the actions/auth.js and call that action creator
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000); //delays the exec of the next step
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  //sign up key=https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //sign in key=https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC-qYwz5_TsnOH3XA4_waeiEpVYAWRmhR8";
  if (!action.isSignUp) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-qYwz5_TsnOH3XA4_waeiEpVYAWRmhR8";
  }
  try {
    const res = yield axios.post(url, authData); //to save the response to a constant, add yield since axios returns a promise
    console.log(res.data);
    const expirationDate = yield new Date(
      new Date().getTime() + res.data.expiresIn * 1000
    );
    //store the token in the local storage not to lose it on refresh
    yield localStorage.setItem("token", res.data.idToken);
    yield localStorage.setItem("expirationDate", expirationDate);
    yield localStorage.setItem("userId", res.data.localId);
    yield put(actions.authSuccess(res.data.idToken, res.data.localId));
    yield put(actions.checkAuthTimeout(res.data.expiresIn));
  } catch (error) {
    yield put(actions.authFailure(error.response.data.error));
  }
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    ); //local storage returns a string and so change it into a date
    if (expirationDate <= new Date()) {
      //if exp date is <= now
      yield put(actions.logout());
    } else {
      const userId = yield localStorage.getItem("userId");
      yield put(actions.authSuccess(token, userId));
      yield put(
        actions.checkAuthTimeout(
          expirationDate.getTime() - new Date().getTime
        ) / 1000
      );
    }
  }
}
