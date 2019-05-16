export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_CURRENT_WEATHER":
      return {
        ...state,
        current: action.payload
      };
    case "FETCH_FORECAST_WEATHER":
      return {
        ...state,
        forecast: action.payload
      };
    default:
      return state;
  }
};
