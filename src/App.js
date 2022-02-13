import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchCountriesStatistic } from "./store/countries/thunk";

import { Header } from "./components/Header";
import { DataTable } from "./components/DataTable";
import { Error } from "./components/Error";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector((rootStore) => rootStore.countries.error);

  const fetchStatistic = () => dispatch(fetchCountriesStatistic());

  useEffect(fetchStatistic, []);

  return (
    <div className="app">
      <Header />
      {error ? (
        <Error errorMessage={error} onRetry={fetchStatistic} />
      ) : (
        <DataTable />
      )}
    </div>
  );
};

export default App;
