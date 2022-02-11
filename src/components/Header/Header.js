import "./Header.styles.css";

const Header = () => (
  <header className="header">
    <div className="logo-block">
      {/* eslint-disable-next-line global-require */}
      <img className="header-logo" src={require("./covid-logo.png")} alt="#" />
      <h1 className="header-heading">Statistic</h1>
    </div>
    <div className="search-field">
      <input className="search-input" placeholder="Search..." />
      {/* eslint-disable-next-line global-require */}
      <img className="search-icon" src={require("./search-icon.png")} alt="#" />
    </div>
  </header>
);

export default Header;
