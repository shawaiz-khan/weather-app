import React from 'react';

const WeatherCard = ({ location, temperature, weatherDescription, humidity, windSpeed, weatherIcon }) => {
    return (
        <div className="weather-card p-4 bg-white shadow-lg rounded-lg flex flex-col items-center">
            <img src={weatherIcon} alt="Weather Icon" className="w-16 h-16 mb-2" />
            <h2 className="text-3xl font-bold mb-1">{temperature}°C</h2>
            <p className="text-lg text-gray-600 mb-1">{location}</p>
            <p className="text-sm text-gray-500 mb-2">{weatherDescription}</p>
            <div className="text-sm text-gray-500">
                <p>Humidity: {humidity}%</p>
                <p>Wind Speed: {windSpeed} km/h</p>
            </div>
        </div>
    );
};

export default WeatherCard;