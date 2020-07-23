import React from "react";
import PropTypes from "prop-types";
import styles from "./ErrorState.module.css";

const ErrorState = ({ onRetry }) => {
  return (
    <div className={styles['error-state']}>
      <h1>Oops</h1>
      <p>Something went wrong</p>
      <button className={styles["error-state__retry-button"]} onClick={onRetry}>
        Try to load article again
      </button>
    </div>
  );
};

ErrorState.propTypes = {
  onRetry: PropTypes.func.isRequired
};

export { ErrorState };
