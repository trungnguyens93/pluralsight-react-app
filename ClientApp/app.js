import React from "react";
import { browserHistory, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import FullPage from "./components/common/FullPage";

// Import setting Redux package
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";

// Declare a store variable
const store = configureStore(window.__STATE__);

const App = () => {
  return (
    <Provider>
      <Router history={browserHistory}>
        <FullPage />
      </Router>
    </Provider>
  );
};

export default App;
