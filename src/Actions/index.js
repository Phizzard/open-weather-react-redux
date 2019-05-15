import axios from "axios";

export const fetchWeather = (lat = 0, lon = 0) => async dispatch => {
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
  dispatch({
    type: "FETCH_WEATHER",
    payload: data
  });
};
