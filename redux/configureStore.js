import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

export default function configureStore(initialState = {}) {
  const restUrl = "http://localhost:9000";

  const client = axios.create({
    baseURL: restUrl,
    responseType: "json",
  });

  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk, axios.create(axiosMiddleware(client)))
  );
}
