import React, { useState } from 'react';
import axios from 'axios';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  name: string;
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState('');

  const API_KEY = 'YOUR_API_KEY'; // In einer echten Anwendung würde dies sicher gespeichert werden

  const getWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=de`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Stadt nicht gefunden');
      setWeather(null);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Wetter App</h2>
      
      <form onSubmit={getWeather} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Stadt eingeben..."
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Suchen
          </button>
        </div>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {weather && (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">{weather.name}</h3>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="Wetter Icon"
            className="mx-auto"
          />
          <p className="text-3xl font-bold mb-2">{Math.round(weather.main.temp)}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p>Luftfeuchtigkeit: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;