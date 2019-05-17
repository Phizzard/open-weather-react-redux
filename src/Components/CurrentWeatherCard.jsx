import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useInterval from "use-interval";
import { distanceInWords } from "date-fns";
import { fetchCurrentWeather } from "../Actions";
import WeatherCard from "./WeatherCard";

const kelvinToCelsius = temp => {
  const CONVERSION_VALUE = 273.15;

  return temp - CONVERSION_VALUE;
};

const WeatherSummary = ({ fetchCurrentWeather, data }) => {
  const [now, setNow] = useState(new Date());

  useInterval(() => {
    setNow(new Date());
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;

      fetchCurrentWeather(latitude, longitude);
    });
  }, [fetchCurrentWeather]);

  return (
    <div className="flex justify-center content-center mt-6 ">
      <WeatherCard
        title="CurrentWeather"
        className="bg-blue-600"
        subTitle={data.name}
        temp={data.main ? kelvinToCelsius(data.main.temp).toFixed(1) : 0}
        minTemp={data.main ? kelvinToCelsius(data.main.temp_min).toFixed(1) : 0}
        maxTemp={data.main ? kelvinToCelsius(data.main.temp_max).toFixed(1) : 0}
        status={
          data.weather && data.weather.length > 0
            ? data.weather[0].main
            : "Unknown"
        }
        icon={
          data.weather && data.weather.length > 0 ? data.weather[0].icon : null
        }
        lastUpdated={distanceInWords(data.lastUpdated, now, {
          includeSeconds: true
        })}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.weather.current || {}
  };
};

export default connect(
  mapStateToProps,
  { fetchCurrentWeather }
)(WeatherSummary);
