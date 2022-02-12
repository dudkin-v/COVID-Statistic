import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchCountriesStatistic } from "./store/countries/thunk";

import { Header } from "./components/Header";
import { DataTable } from "./components/DataTable";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((rootStore) => rootStore.countries.loading);
  const error = useSelector((rootStore) => rootStore.countries.error);

  useEffect(() => {
    dispatch(fetchCountriesStatistic());
  }, []);

  console.log(error);

  return (
    <div className="app">
      <Header />
      {loading ? <h2>Loading</h2> : null}
      {error ? (
        <div>
          <h2>{error}</h2>
          <button
            type="button"
            onClick={() => dispatch(fetchCountriesStatistic())}
          >
            RETRY
          </button>
        </div>
      ) : null}
      <DataTable />
    </div>
  );
};

export default App;
