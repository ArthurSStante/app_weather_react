import React, { useEffect, useState } from "react";

const WeatherResult = ({ message, errorMessage }) => {
  return (
    <div className="">
      <p>{message}</p>
      <p className="text-red-500" >{errorMessage}</p>
    </div>
  );
};

export default WeatherResult;
