import React from "react";
import { Card, CardTitle, CardSubTitle } from "./Card/";

const WeatherCard = ({
  title,
  subTitle,
  temp,
  minTemp,
  maxTemp,
  status,
  icon,
  lastUpdated
}) => (
  <Card>
    {title && <CardTitle>{title}</CardTitle>}
    {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
    {icon && (
      <img
        className="m-auto"
        alt={status}
        src={`http://openweathermap.org/img/w/${icon}.png`}
      />
    )}
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
