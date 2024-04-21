import React, { useState } from "react";
import { countries } from "countries-list";
import WeatherService from "../../utils/api";

const Search = () => {
  const [location, setLocation] = useState("");
  const [paisSelecionado, setPaisSelecionado] = useState("");

  const handleChangePais = (event) => {
    setPaisSelecionado(event.target.value);
  };

  const paisesArray = Object.entries(countries);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    WeatherService(location);
  };

  console.log("País selecionado:", paisSelecionado);

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
        <select value={paisSelecionado} onChange={handleChangePais}>
          <option value="">Selecione um país</option>
          {paisesArray.map(([codigo, pais]) => (
            <option key={codigo} value={codigo}>
              {pais.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Search;
