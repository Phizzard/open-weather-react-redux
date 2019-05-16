import React from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastWeatherCardList from "./ForecastWeatherCardList";
import RefreshButton from "./RefreshButton";

function App() {
  return (
    <div className="App">
      <CurrentWeatherCard />
      <ForecastWeatherCardList />
      <RefreshButton />
    </div>
  );
}

export default App;
