import axios from "axios";

export const fetchCurrentWeather = (lat = 0, lon = 0) => async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat,
          lon,
          appid: "25eb29cb59e21ff11d1defe27f729066"
        }
      }
    );
    data.lastUpdated = Date.now();

    dispatch({
      type: "FETCH_CURRENT_WEATHER",
      payload: data
    });
  } catch (err) {
    dispatch({
      type: "FETCH_CURRENT_WEATHER",
      payload: {}
    });
  }
};

export const fetchForecastWeather = (lat = 0, lon = 0) => async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          lat,
          lon,
          appid: "25eb29cb59e21ff11d1defe27f729066"
        }
      }
    );
    data.lastUpdated = Date.now();

    dispatch({
      type: "FETCH_FORECAST_WEATHER",
      payload: data
    });
  } catch (err) {
    dispatch({
      type: "FETCH_FORECAST_WEATHER",
      payload: {}
    });
  }
};
