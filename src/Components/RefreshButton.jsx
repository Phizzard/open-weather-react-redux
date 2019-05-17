import React from "react";
import { WiCloudRefresh } from "react-icons/wi";
import { connect } from "react-redux";
import toastr from "toastr";

import { fetchCurrentWeather, fetchForecastWeather } from "../Actions/index";
import Button from "./Button";

const RefreshButton = ({ fetchCurrentWeather, fetchForecastWeather }) => {
  return (
    <div className="mt-6 flex justify-center">
      <Button
        className="flex justify-center fixed bottom-0 w-full sm:w-auto sm:bottom-auto sm:top-0 sm:left-0 sm:mt-6 sm:ml-6 bg-green-500 hover:bg-green-600 "
        onClick={() => {
          navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;

            fetchCurrentWeather(latitude, longitude);
            fetchForecastWeather(latitude, longitude);
            toastr.success("Weather Status Refreshed");
          });
        }}
      >
        <WiCloudRefresh className="text-4xl pointer-events-none" />
      </Button>
    </div>
  );
};

export default connect(
  null,
  { fetchCurrentWeather, fetchForecastWeather }
)(RefreshButton);
