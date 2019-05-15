import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../Actions";

const WeatherSummary = ({ fetchWeather }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetchWeather(latitude, longitude);
    });
  }, [fetchWeather]);

  return (
    <div>
      <h1>Current Weather</h1>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    weather: state.weather
  };
};

export default connect(
  mapStateToProps,
  { fetchWeather }
)(WeatherSummary);
