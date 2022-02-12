export const fetchCountriesStatistic = () => async (dispatch) => {
    try {
        dispatch({
            type: "SET_STATISTIC_LOADING",
            payload: true,
        });
        const response = await fetch("https://api.covid19api.com/summary");
        if ((Math.random() * 5) > 3) {
            throw new Error("Test error");
        }
        // eslint-disable-next-line no-unreachable
        const data = await response.json();
        dispatch({
            type: "UPDATE_STATISTIC",
            payload: data.Countries,
        });
        // eslint-disable-next-line no-empty
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
