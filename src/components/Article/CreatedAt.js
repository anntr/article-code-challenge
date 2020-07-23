import React from "react";
import PropTypes from "prop-types";
import { isDateValid } from "../../helpers/isDateValid";

const CreatedAt = ({ value }) => {
  const date = new Date(value);
  const humanizedString = isDateValid(date) ? date.toDateString() : undefined;

  return <span>{humanizedString}</span>;
};

CreatedAt.propTypes = {
  value: PropTypes.string
};

export { CreatedAt };
