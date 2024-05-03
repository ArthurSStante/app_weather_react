import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherService from "../../utils/api";
import Header from "../Header";

const InfoCity = () => {
  const { location } = useParams();
  const [cityData, setCityData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        WeatherService({
          city: location,
          onSuccess: (cityData) => {
            setCityData(cityData);
            console.log("dados", cityData);
            setLoading(false);
          },
          onError: (error) => {
            console.error("Error ao buscar dados da cidade", error);
            setLoading(false);
          },
        });
      } catch (error) {
        console.log("Error ao buscar dados", error);
        setLoading(false);
      }
    };

    fetchData();

    console.log("Dados da API:", cityData.name);

    return () => {
      setCityData(null);
    };
  }, [location]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Carregando...
      </div>
    );
  }
  if (!cityData) {
    return (
      <div className="flex justify-center items-center h-screen">
        Não foi possivel carregar os dados
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center h-screen relative z-10 text-[white]">
        <h2 className="text-2xl mb-5">Detalhes de {cityData.name}</h2>
        <p className="paragrafo">Pais: {cityData.country}</p>
        <p className="paragrafo">Temperatura: {cityData.temperature}</p>
        <p className="paragrafo">
          Temperatura Máxima: {parseInt(cityData.temperatureMax) + 1}
        </p>
        <p className="paragrafo">
          Temperatura Minima: {parseInt(cityData.temperatureMin) - 1}
        </p>
        <p className="paragrafo">Velocidade dos Ventos: {cityData.speed}</p>
      </div>
    </div>
  );
};

export default InfoCity;
