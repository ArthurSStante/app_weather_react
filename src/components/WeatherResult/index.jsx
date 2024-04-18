import React from 'react';

function WeatherResult({ temperature, error }) {
  return (
    <div>
      {temperature && <div id="result">{temperature}</div>}
      {error && <div id="error">{error}</div>}
    </div>
  );
}

export default WeatherResult;