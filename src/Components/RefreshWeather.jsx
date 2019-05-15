import React from "react";
import { WiCloudRefresh } from "react-icons/wi";

import Button from "./Button";

const RefreshWeather = () => (
  <div className="mt-6 flex justify-center">
    <Button>
      <WiCloudRefresh className="text-3xl" />
    </Button>
  </div>
);

export default RefreshWeather;
