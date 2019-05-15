import React, { useEffect } from "react";
import { connect } from "react-redux";
import { WiCloud } from "react-icons/wi";
import { fetchWeather } from "../Actions";
import { Card, CardTitle, CardSubTitle } from "./Card/";

const kelvinToCelsius = temp => {
  const CONVERSION_VALUE = 273.15;

  return temp - CONVERSION_VALUE;
};

const WeatherSummary = ({ fetchWeather, weather }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetchWeather(latitude, longitude);
    });
  }, [fetchWeather]);

  return (
    <Card>
      <CardTitle>Current Weather</CardTitle>
      <CardSubTitle>{weather.name}</CardSubTitle>
      <WiCloud className="m-auto text-6xl" />
      {weather.main && (
        <div>
          <p className="text-3xl pb-4">
            {kelvinToCelsius(weather.main.temp).toFixed(1)}&deg;C
          </p>
          <p className="text-xs">
            {kelvinToCelsius(weather.main.temp_min).toFixed(1)}&deg;C /{" "}
            {kelvinToCelsius(weather.main.temp_max).toFixed(1)}&deg;C
          </p>
        </div>
      )}
      {weather.weather && weather.weather.length > 0 && (
        <p className="text-xs">{weather.weather[0].main}</p>
      )}
    </Card>
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
