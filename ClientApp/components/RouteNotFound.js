import React, { useEffect } from "react";
import Route from "react-router-dom";

const RouteNotFound = (props) => {
  useEffect(() => {
    console.log("loading data before rendering");
  });

  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = 404;
        }
        return (
          <div>
            <h1>404 : Not Found!</h1>
          </div>
        );
      }}
    />
  );
};

RouteNotFound.prototype = {};

export default RouteNotFound;
