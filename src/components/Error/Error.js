import PropTypes from "prop-types";

import "./Error.styles.css";

const Error = ({ errorMessage, onRetry }) => (
  <div className="error-wrapper">
    <div className="error">
      <h3 className="error-message">{errorMessage}</h3>
      <button className="retry-btn" type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  </div>
);

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired,
};

export default Error;
