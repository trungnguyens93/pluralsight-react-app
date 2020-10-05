import React from "react";
import PropTypes from "prop-types";

const PageTop = (props) => {
  return (
    <div>
      <header className="header">
        <div className="container-main d-flex align-items-center justify-content-between">
          <a href="/" rel="home" className="header-logo">
            <img src="assets/images/SVCClogo.png" alt="SVCC" />
          </a>
          {props.children}
        </div>
      </header>
    </div>
  );
};

PageTop.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageTop;
