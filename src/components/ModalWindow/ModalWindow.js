import PropTypes from "prop-types";

import "./ModalWindow.styles.css";

const ModalWindow = ({ country, modalIsOpen, onClose }) => (
  <div
    className={modalIsOpen ? "modal-wrapper" : "modal-wrapper-close"}
    role="button"
    aria-pressed="false"
    tabIndex={0}
    onClick={onClose}
  >
    <div className="modal">
      <h3 className="modal-heading">{country.Country}</h3>
      <div className="modal-description">
        <div className="description-icons">
          {/* eslint-disable-next-line global-require */}
          <img className="confirmed-icon" src={require("./total-confirmed.png")} alt="Total Confirmed" />
          {/* eslint-disable-next-line global-require */}
          <img className="deaths-icon" src={require("./total-death.png")} alt="Total Deaths" />
          {/* eslint-disable-next-line global-require */}
          <img className="recovered-icon" src={require("./total-recovered.png")} alt="Total Recovered" />
        </div>
        <div className="description-text">
        <div className="description-name">
          <p>Total Confirmed</p>
          <p>Total Deaths</p>
          <p>Total Recovered</p>
        </div>
        <div className="description-count">
          <p>{country.TotalConfirmed}</p>
          <p>{country.TotalDeaths}</p>
          <p>{country.TotalRecovered}</p>
        </div>
        </div>
      </div>
      <button className="close-btn" type="button" onClick={() => onClose}>
        OK
      </button>
    </div>
  </div>
);

ModalWindow.propTypes = {
  country: PropTypes.shape({
    Country: PropTypes.string,
    TotalConfirmed: PropTypes.number,
    TotalDeaths: PropTypes.number,
    TotalRecovered: PropTypes.number,
  }).isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWindow;
