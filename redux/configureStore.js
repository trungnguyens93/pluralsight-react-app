import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState = {}) {
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });

  const restUrl = "http://localhost:9000";

  const client = axios.create({
    baseURL: restUrl,
    responseType: "json",
  });

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, axiosMiddleware(axios.create())))
  );
}
