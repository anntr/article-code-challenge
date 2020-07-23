import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { article__body } from "./Article.module.css";

const Body = ({ values }) => {
  return (
    <section
      className={article__body}
      dangerouslySetInnerHTML={{
        __html: values
          .map(dirtyValue => DOMPurify.sanitize(dirtyValue))
          .join("")
      }}
    />
  );
};

Body.propTypes = {
  value: PropTypes.string
};

export { Body };
