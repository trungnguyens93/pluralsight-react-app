import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import SpeakersHeader from "./SpeakersHeader";
import SpeakerList from "./SpeakerList";

const Speakers = () => {
  const [appData, setAppData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (appData.length === 0) {
      axios
        .get("/data/speakers.json")
        .then((response) => {
          setAppData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  if (isLoading) {
    return (
      <div className="container-main">
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
        <SpeakersHeader />
        <SpeakerList speakers={appData} />
      </div>
    );
  }
};

Speakers.prototype = {};

export default Speakers;
