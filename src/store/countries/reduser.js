const initialState = {
  statistic: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATISTIC_LOADING":
      return { ...state, loading: action.payload };
    case "SET_STATISTIC_ERROR":
      return { ...state, error: action.payload };
    case "UPDATE_STATISTIC":
      return { ...state, statistic: action.payload, error: null };
    default:
      return state;
  }
};

export default reducer;
