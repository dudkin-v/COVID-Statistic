export const fetchCountriesStatistic = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_STATISTIC_LOADING",
      payload: true,
    });
    const response = await fetch("https://api.covid19api.com/summary");
    const data = await response.json();
    dispatch({
      type: "UPDATE_STATISTIC",
      payload: data.Countries,
    });
  } catch (e) {
    dispatch({
      type: "SET_STATISTIC_ERROR",
      payload: e.message,
    });
  } finally {
    dispatch({
      type: "SET_STATISTIC_LOADING",
      payload: false,
    });
  }
};
