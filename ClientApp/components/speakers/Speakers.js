import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { speakersFetchData } from "../../../redux/actions/speakers";

import SpeakersHeader from "./SpeakersHeader";
import SpeakerList from "./SpeakerList";

const Speakers = () => {
  const [appData, setAppData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (appData.length === 0) {
      // axios
      //   .get("/data/speakers.json")
      //   .then((response) => {
      //     setAppData(response.data);
      //     setIsLoading(false);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      props.speakersFetchData();
    }
  });

  if (props.isLoading) {
    return (
      <div className="container-main">
        <span>Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
        <SpeakersHeader />
        <SpeakerList speakers={props.speakers} />
      </div>
    );
  }
};

Speakers.prototype = {};

const mapStateToProps = (state) => {
  return {
    speakers: state.speakers.data,
    hasErrored: state.speakers.hasErrored,
    isLoading: state.speakers.isLoading,
    errorMessage: state.speakers.errorMessage,
  };
};

// export default Speakers;

export default connect(mapStateToProps, { speakersFetchData })(Speakers);
