import React from "react";
import PropTypes from "prop-types";
import SpeakerListItem from "./SpeakerListItem";

const SpeakerList = ({ speakers }) => {
  return (
    <div className="container-main speakers">
      <div className="row">
        <div className="col-12">
          <div>
            <div className="speakers-title">
              Speakers
              <span className="speakers-filters"></span>
            </div>

            <div className="speakers-list">
              <div className="row speakers-list-row">
                {speakers.map((item, index) => {
                  return <SpeakerListItem key={index} {...item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SpeakerList.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      company: PropTypes.string,
      imageUrl: PropTypes.string,
    })
  ),
};

export default SpeakerList;
