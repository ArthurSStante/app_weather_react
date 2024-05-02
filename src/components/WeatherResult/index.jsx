import React from "react";

const WeatherResult = ({ cityData, errorMessage }) => {
  return (
    <div className="flex flex-col justify-center items-center text-red-600">
      <div className="text-2xl">
        <p>
          Temperatura de {cityData.name} é {cityData.temperature}
        </p>
        <p className="text-red-500">{errorMessage}</p>
      </div>
      <div className="mt-5">
        <img
          src={`http://openweathermap.org/img/wn/${cityData.icon}.png`}
          alt="icon"
        />
      </div>
    </div>
  );
};

export default WeatherResult;
