import React from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import RefreshButton from "./RefreshButton";

function App() {
  return (
    <div className="App">
      <CurrentWeatherCard />
      <RefreshButton />
    </div>
  );
}

export default App;
