import React from "react";
import Footer from "./Footer";
import PageTop from "./PageTop";
import CodeCampMenu from "./CodeCampMenu";

const FullPage = (props) => {
  return (
    <div>
      <PageTop>
        <CodeCampMenu />
      </PageTop>
      <Footer />
    </div>
  );
};

export default FullPage;
