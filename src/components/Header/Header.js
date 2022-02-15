import PropTypes from "prop-types";

import "./Header.styles.css";

const Header = ({ onSearch }) => (
  <header className="header">
    <div className="logo-block">
      {/* eslint-disable-next-line global-require */}
      <img className="header-logo" src={require("./covid-logo.png")} alt="#" />
      <h1 className="header-heading">Statistic</h1>
    </div>
    <div className="search-field">
      <input
        className="search-input"
        placeholder="Search..."
        onChange={onSearch}
      />
    </div>
  </header>
);

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
