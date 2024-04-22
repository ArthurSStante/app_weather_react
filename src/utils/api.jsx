import axios from "axios";

function WeatherService({ city, onSuccess, onMessageError }) {
  const apiKey = "d108789e363449e2f685c007633da5a6";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      const data = response.data;
      const temperatureKelvin = data.main.temp;
      const temperatureCelsius = temperatureKelvin - 273.15;
      const cityData = {
        name: data.name,
        country: data.sys.country,
        temperature: temperatureCelsius.toFixed(),
        temperatureMax: temperatureCelsius.toFixed(),
        temperatureMin: temperatureCelsius.toFixed(),
        speed: data.wind.speed,
        icon: data.weather[0].icon,
      };
      onSuccess(cityData); // Passando os dados da cidade para o componente
    })
    .catch((error) => {
      if (error.response) {
        // Resposta de erro do servidor
        onMessageError(error.response.data.message);
      } else if (error.request) {
        // Erro na requisição
        onMessageError("Erro na requisição.");
      } else {
        // Outros erros
        onMessageError(error.message);
      }
    });
}

export default WeatherService;
