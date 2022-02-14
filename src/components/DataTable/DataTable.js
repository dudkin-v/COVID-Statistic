import PropTypes from "prop-types";

import "./DataTable.styles.css";

const DataTable = ({ statistic }) => (
  <table className="data-table">
    <thead>
      <tr>
        <td>№</td>
        <td>Country</td>
        <td>Total Confirment</td>
      </tr>
    </thead>
    <tbody>
      {statistic.map((country, index) => (
        <tr key={country.ID}>
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
};

export default DataTable;
