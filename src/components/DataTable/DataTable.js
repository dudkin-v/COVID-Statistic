import PropTypes from "prop-types";

import "./DataTable.styles.css";

const DataTable = ({ statistic, showModal, onSort }) => (
  <table className="data-table">
    <thead>
      <tr>
        <td>№</td>
        <td
          className="sort-btn"
          role="button"
          aria-pressed="false"
          tabIndex={0}
          onClick={onSort("Country")}
        >
          Country
        </td>
        <td
          className="sort-btn"
          role="button"
          aria-pressed="false"
          tabIndex={0}
          onClick={onSort("TotalConfirmed")}
        >
          Total Confirmed
        </td>
      </tr>
    </thead>
    <tbody>
      {statistic.map((country, index) => (
        <tr
          key={country.ID}
          role="button"
          aria-pressed="false"
          tabIndex={index + 1}
          onClick={showModal(country.ID)}
        >
          <td>{index + 1}</td>
          <td>{country.Country}</td>
          <td>{country.TotalConfirmed}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

DataTable.propTypes = {
  statistic: PropTypes.arrayOf(
    PropTypes.shape({
      Country: PropTypes.string.isRequired,
      TotalConfirmed: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  showModal: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default DataTable;
