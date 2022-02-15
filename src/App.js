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

  const fetchStatistic = () => dispatch(fetchCountriesStatistic());

  useEffect(fetchStatistic, []);

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

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      {error ? (
        <Error errorMessage={error} onRetry={fetchStatistic} />
      ) : (
        <DataTable
          statistic={
            searchCountry
              ? statistic.filter((country) =>
                  country.Country.toLowerCase().startsWith(
                    searchCountry.toLowerCase()
                  )
                )
              : statistic
          }
          showModal={handleClick}
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
