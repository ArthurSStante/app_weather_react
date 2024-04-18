function WeatherService({ city, country, onSuccess, onError }) {
  const apiKey = "d108789e363449e2f685c007633da5a6";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Cidade não encontrada ou problema na obtenção da temperatura."
        );
      }
      return response.json();
    })
    .then((data) => {
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = temperatureKelvin - 273.15;
      onSuccess(
        `A temperatura em ${city}, ${country} é ${temperatureCelsius.toFixed(
          2
        )}°C`
      );
    })
    .catch((error) => {
      onError(error.message);
    });
}

export default WeatherService;
