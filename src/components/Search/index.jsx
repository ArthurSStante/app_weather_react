import React, { useState } from "react";
import WeatherService from "../../utils/api";
import WeatherResult from "../WeatherResult";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const [location, setLocation] = useState("");
  const [weatherSuccess, setWeatherSuccess] = useState("");
  const [weatherError, setWeatherError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const handleSuccess = (message) => {
      console.log(message); // Aqui você pode decidir o que fazer com a mensagem de sucesso
      setWeatherSuccess(message);
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
            placeholder="Pesquisar país..."
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
      <div className="flex justify-center items-center h-screen">
        <WeatherResult message={weatherSuccess} errorMessage={weatherError} />
      </div>
    </div>
  );
};

export default Search;
