import React, { useEffect } from "react";
import { connect } from "react-redux";
import { format } from "date-fns";
import { fetchForecastWeather } from "../Actions";
import WeatherCard from "./WeatherCard";

const kelvinToCelsius = temp => {
  const CONVERSION_VALUE = 273.15;

  return temp - CONVERSION_VALUE;
};

const ForecastWeatherCardList = ({ fetchForecastWeather, data }) => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetchForecastWeather(latitude, longitude);
    });
  }, [fetchForecastWeather]);

  return (
    <div className="flex justify-start pt-6 overflow-x-scroll">
      {data &&
        data.list &&
        data.list.length > 0 &&
        data.list.map(day => {
          const date = format(new Date(day.dt_txt), "ddd Do MMM");

          return (
            <WeatherCard
              key={day.dt}
              className="mx-4 w-full"
              title={date}
              subTitle={data.city.name}
              temp={kelvinToCelsius(day.main.temp).toFixed(1)}
              minTemp={kelvinToCelsius(day.main.temp_min).toFixed(1)}
              maxTemp={kelvinToCelsius(day.main.temp_max).toFixed(1)}
              status={
                day.weather && day.weather.length > 0
                  ? day.weather[0].main
                  : "Unknown"
              }
              icon={
                day.weather && day.weather.length > 0
                  ? day.weather[0].icon
                  : null
              }
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: { ...state.weather.forecast } || {}
  };
};

export default connect(
  mapStateToProps,
  { fetchForecastWeather }
)(ForecastWeatherCardList);
