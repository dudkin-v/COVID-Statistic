import { useSelector } from "react-redux";

import "./DataTable.styles.css";

const DataTable = () => {
    const statistic = useSelector(rootStore => rootStore.countries.statistic);

    return (
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
    )
};

export default DataTable;
