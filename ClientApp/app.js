import React from "react";
import { browserHistory, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import FullPage from "./components/common/FullPage";

const App = () => {
  return (
    <Router history={browserHistory}>
      <FullPage />
    </Router>
  );
};

export default App;
