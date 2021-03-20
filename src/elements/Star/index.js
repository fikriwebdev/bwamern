import React from "react";
import propTypes from "prop-types";

export default function Star({ value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(<div className="star" key={`star-${index}`} st></div>);
  }
  return <div></div>;
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
