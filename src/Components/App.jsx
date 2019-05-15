import React from "react";
import WeatherSummary from "./WeatherSummary";
import RefreshWeather from "./RefreshWeather";

function App() {
  return (
    <div className="App">
      <WeatherSummary />
      <RefreshWeather />
    </div>
  );
}

export default App;
