import React from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastWeatherCardList from "./ForecastWeatherCardList";
import RefreshButton from "./RefreshButton";

function App() {
  return (
    <div className="App">
      <CurrentWeatherCard />
      <div className="w-screen py-12">
        <h2 className="text-center text-2xl font-semibold">
          5 Day / 3 Hour Forecast
        </h2>
      </div>
      <ForecastWeatherCardList />
      <RefreshButton />
    </div>
  );
}

export default App;
