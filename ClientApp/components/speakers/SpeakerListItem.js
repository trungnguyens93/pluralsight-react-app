import React from "react";
import PropTypes from "prop-types";

const SpeakerListItem = (props) => {
  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">
          <img src="assets/images/speakers/speaker-41355.jpg" alt="hello" />
        </div>
        <div className="events-speaker-description">
          <div className="name">
            {props.firstName} {props.lastName}
          </div>
          <div className="profession">{props.company}</div>
        </div>
      </div>
    </div>
  );
};

SpeakerListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  company: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default SpeakerListItem;
