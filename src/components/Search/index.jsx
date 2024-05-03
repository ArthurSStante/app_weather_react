import React, { useState } from "react";
import WeatherService from "../../utils/api";
import WeatherResult from "../WeatherResult";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../Header";

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
      setTimeout(() => {
        setWeatherError("");
      }, 5000);
      // milissegundos = 5 segundos
    };

    WeatherService({
      city: location,
      onSuccess: handleSuccess,
      onMessageError: handleError,
    });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleFormSubmit} className="flex justify-center">
        <div className="relative transition-all duration-300 transform hover:scale-105">
          <input
            type="text"
            placeholder="Digite a cidade..."
            className="mt-11 ml-1 pl-6 p-2 focus:outline-none rounded-full border-[1px] border-solid border-white border-opacity-80 text-[white] bg-[rgba(255,255,255,0.1)]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <div className="mt-11 ml-2 absolute inset-y-0 left-0 flex items-center pl-0.5 pointer-events-none">
            <IoSearchOutline className="text-[white]" />
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center mt-20 ">
        {weatherSuccess && location && (
          <WeatherResult
            cityData={weatherSuccess}
            errorMessage={weatherError}
          />
        )}
        {weatherSuccess && location && (
          <Link to={`/InfoCity/${location}`}>
            <button className="px-5 py-13 rounded-lg border-none mt-9 text-lg font-semibold text-white bg-[#001F3F] transition-all duration-300 transform hover:scale-105">
              Ver outras informaçoes sobre{" "}
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Search;
