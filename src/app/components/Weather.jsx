'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=岡山県,jp&appid=c25a62788eaa0398eb54474e90883baa'
        );

        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>岡山の天気</h1>
      <p>天気: {weather.weather[0].description}</p>
      <p>気温: {Math.round(weather.main.temp - 273.15)}°C</p>
      <p>湿度: {weather.main.humidity}%</p>
      <p>風速: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;