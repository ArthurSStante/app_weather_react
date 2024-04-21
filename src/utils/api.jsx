function WeatherService({ city, onSuccess, onError }) {
  const apiKey = "d108789e363449e2f685c007633da5a6";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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
      const menssage = `A temperatura em ${city} é ${temperatureCelsius.toFixed()}°C`;
      onSuccess(menssage);
    })
    .catch((error) => {
      onError(error.message);
    });
}

export default WeatherService;
