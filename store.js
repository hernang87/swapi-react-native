import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createPromise } from "redux-promise-middleware";
import reducers from "./reducers";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    thunk,
    createPromise({
      promiseTypeSuffixes: ["LOADING", "SUCCESS", "FAILURE"]
    })
    // logger
  )
);

export default store;
