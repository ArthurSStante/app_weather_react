import React from 'react';

function CountryOption({ name, flagUrl }) {
  return (
    <option value={name}>
      <img src={flagUrl} alt={`Bandeira ${name}`} /> {name}
    </option>
  );
}

export default CountryOption;