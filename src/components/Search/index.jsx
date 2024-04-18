import React, { useState } from "react";
import WeatherService from "../../utils/api";

const Search = () => {
  const [location, setLocation] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    WeatherService(location);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Pesquisar país..."
          className="p-2 border border-gray-300 rounded-md"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <select name="" id=""></select>
      </form>
    </div>
  );
};

export default Search;
