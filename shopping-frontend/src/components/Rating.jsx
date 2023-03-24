import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  function renderStars() {
    const stars = [];
    for (let temp = value; temp > 0; temp--) {
      if (temp > 0.5) {
        stars.push(
          <span className="fs-5" key={temp}>
            <FaStar color={color} />
          </span>
        );
      } else if (temp === 0.5) {
        stars.push(
          <span className="fs-5" key={temp}>
            <FaStarHalfAlt color={color} />
          </span>
        );
      } else {
        stars.push(
          <span className="fs-5" key={temp}>
            <FaRegStar color={color} />
          </span>
        );
      }
    }
    return stars;
  }
  return (
    <div className="rating">
      {renderStars()}
      <span className="ms-1 fs-6">{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#800000",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
