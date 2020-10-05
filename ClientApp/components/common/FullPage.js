import React from "react";
import Footer from "./Footer";
import PageTop from "./PageTop";
import CodeCampMenu from "./CodeCampMenu";
import Routes from "../Routes";

const FullPage = (props) => {
  return (
    <div>
      <PageTop>
        <CodeCampMenu />
      </PageTop>

      <Routes />

      <Footer />
    </div>
  );
};

export default FullPage;
