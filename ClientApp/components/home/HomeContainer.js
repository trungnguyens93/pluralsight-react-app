import React from "react";
import HomeSpeakersCarousel from "./HomeSpeakersCarousel";

const HomeContainer = () => {
  return (
    <div className="container-main events">
      <div className="row">
        <div className="col-12">
          <HomeSpeakersCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
