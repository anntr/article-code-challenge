import React from "react";
import PropTypes from "prop-types";

const Author = ({ value }) => {
  return <strong>{value}</strong>;
};

Author.propTypes = {
  value: PropTypes.string
};

export { Author };
