import React from "react";
import PropTypes from "prop-types";
import { article__title } from "./Article.module.css";

const Title = ({ value }) => {
  return <h1 className={article__title}>{value}</h1>;
};

Title.propTypes = {
  value: PropTypes.string
};

export { Title };
