import React, { useEffect } from "react";
import HomeHeader from "./HomeHeader";
import HomeContainer from "./HomeContainer";

const Home = () => {
  useEffect(() => {
    debugger;
    console.log("Before rendering Home component");
  });

  return (
    <div>
      <HomeHeader />
      <HomeContainer />
    </div>
  );
};

export default Home;
