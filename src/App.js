import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { fetchCountriesStatistic } from "./store/countries/thunk";

import { Header } from "./components/Header";
import { DataTable } from "./components/DataTable";
import { Error } from "./components/Error";
import { ModalWindow } from "./components/ModalWindow";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const statistic = useSelector((rootStore) => rootStore.countries.statistic);
  const error = useSelector((rootStore) => rootStore.countries.error);

  const [searchCountry, setSearchCountry] = useState("");
  const [modalData, setModalData] = useState({
    Country: "",
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [descending, setDescending] = useState(false);
  const countries = searchCountry
    ? statistic.filter((country) =>
        country.Country.toLowerCase().startsWith(searchCountry.toLowerCase())
      )
    : statistic;

  const fetchStatistic = () => dispatch(fetchCountriesStatistic());

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  const handleClick = (id) => () => {
    setModalData(statistic.find((country) => country.ID === id));
    setModalIsOpen((prevModalState) => !prevModalState);
  };

  const handleClose = () => {
    setModalIsOpen((PrevModalIsOpen) => !PrevModalIsOpen);
  };

  const handleSort = (value) => () => {
    setDescending(!descending);
    if (descending) {
      statistic.sort((prevCountry, nextCountry) =>
        prevCountry[value] > nextCountry[value] ? 1 : -1
      );
    } else
      statistic.sort((prevCountry, nextCountry) =>
        prevCountry[value] < nextCountry[value] ? 1 : -1
      );
  };

  useEffect(fetchStatistic, []);

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      {error ? (
        <Error errorMessage={error} onRetry={fetchStatistic} />
      ) : (
        <DataTable
          statistic={countries}
          showModal={handleClick}
          onSort={handleSort}
        />
      )}
      <ModalWindow
        country={modalData}
        modalIsOpen={modalIsOpen}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;
