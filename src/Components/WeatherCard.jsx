import React from "react";
import { WiCloud } from "react-icons/wi";
import { Card, CardTitle, CardSubTitle } from "./Card/";

const WeatherCard = ({
  title,
  subTitle,
  temp,
  minTemp,
  maxTemp,
  status,
  lastUpdated
}) => (
  <Card>
    {title && <CardTitle>{title}</CardTitle>}
    {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
    <WiCloud className="m-auto text-6xl" />
    <div>
      <p className="text-3xl pb-4">{temp}&deg;C</p>
      <p className="text-xs">
        {minTemp}&deg;C / {maxTemp}&deg;C
      </p>
    </div>
    <p className="text-xs">{status}</p>
    {lastUpdated && (
      <p className="text-xs italic mt-4">Last Updated: {lastUpdated}</p>
    )}
  </Card>
);

WeatherCard.defaultProps = {
  temp: 0,
  minTemp: 0,
  maxTemp: 0,
  status: "Unknown",
  lastUpdated: "Just Now"
};

export default WeatherCard;
