import React, { useEffect } from "react";
import { connect } from "react-redux";
import { format, getDay, compareAsc } from "date-fns";
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
    <div className="">
      {data &&
        data.list &&
        data.list.length > 0 &&
        data.list.map((day, index) => (
          <div
            key={`day-${index}`}
            className="flex justify-start my-2 py-3 overflow-x-scroll"
          >
            {day.map((time, timeIndex) => {
              const date = format(new Date(time.dt_txt), "ddd Do MMM");
              const dateTime = format(new Date(time.dt_txt), "hh:mm A");

              let colourCodePrefix = timeIndex + 4;

              return (
                <WeatherCard
                  key={time.dt}
                  className={`mx-4 min-w-56 bg-indigo-${
                    colourCodePrefix < 9 ? colourCodePrefix : 9
                  }00`}
                  title={date}
                  subTitle={dateTime}
                  temp={kelvinToCelsius(time.main.temp).toFixed(1)}
                  minTemp={kelvinToCelsius(time.main.temp_min).toFixed(1)}
                  maxTemp={kelvinToCelsius(time.main.temp_max).toFixed(1)}
                  status={
                    time.weather && time.weather.length > 0
                      ? time.weather[0].main
                      : "Unknown"
                  }
                  icon={
                    time.weather && time.weather.length > 0
                      ? time.weather[0].icon
                      : null
                  }
                />
              );
            })}
          </div>
        ))}
    </div>
  );
};

const getDaysIndexesOfWeek = () => {
  let count = getDay(new Date());
  let daysIndexesOfWeek = [count + 1];

  for (let i = 2; i < 8; i++) {
    if (count + i > 6) {
      count = count - (count + i);
    }
    daysIndexesOfWeek.push(count + i);
  }

  return daysIndexesOfWeek;
};

const mapStateToProps = state => {
  if (state.weather && state.weather.forecast && state.weather.forecast.list) {
    state.weather.forecast.list = getDaysIndexesOfWeek()
      .map(num =>
        state.weather.forecast.list.filter(
          day => getDay(new Date(day.dt_txt)) === num
        )
      )
      .sort((a, b) => compareAsc(new Date(a.dt_text), new Date(b.dt_text)));
  }
  return {
    data: { ...state.weather.forecast } || {}
  };
};

export default connect(
  mapStateToProps,
  { fetchForecastWeather }
)(ForecastWeatherCardList);
