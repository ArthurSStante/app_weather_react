import React, { useState } from "react";
import WeatherService from "../../utils/api";
import WeatherResult from "../WeatherResult";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Search = () => {
  const [location, setLocation] = useState("");
  const [weatherSuccess, setWeatherSuccess] = useState("");
  const [weatherError, setWeatherError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const handleSuccess = (cityData) => {
      console.log("dados", cityData);
      setWeatherSuccess(cityData);
    };

    const handleError = (errorMessage) => {
      console.error(errorMessage);
      setWeatherError(errorMessage);
      // setTimeout(() => {
      //   setWeatherError("");
      // });
      // 5000 milissegundos = 5 segundos
    };

    WeatherService({
      city: location,
      onSuccess: handleSuccess,
      onError: handleError,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="flex justify-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Coloque a cidade..."
            className="mt-10 w-96 pl-10 p-2 border border-gray-300 rounded-md"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <div className="mt-10 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoSearchOutline />
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center h-screen">
        {weatherSuccess && (
          <WeatherResult
            cityData={weatherSuccess}
            errorMessage={weatherError}
          />
        )}
        {weatherSuccess && (
          <Link to={`/InfoCity/${location}`}>
            <button className="px-5 py-13 rounded-lg border-none mt-10 text-lg font-semibold text-white bg-blue-800 hover:shadow-lg">
              Ver outras informaçoes sobre {location}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Search;
