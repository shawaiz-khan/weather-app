import React from 'react';

const WeatherCard = ({ location, temperature, weatherDescription, humidity, windSpeed, weatherIcon }) => {
    return (
        <div className="weather-card p-6 bg-white shadow-xl rounded-lg grid grid-cols-2 items-center gap-6">
            <div className="flex flex-col items-center justify-center">
                <img src={weatherIcon} alt="Weather Icon" className="w-20 h-20 mb-3" />
                <p className="text-xl text-gray-800 font-semibold mb-2">{location}</p>
                <p className="text-md text-gray-600 font-medium mb-3">{weatherDescription}</p>
            </div>
            <div className="flex flex-col items-center justify-center text-right">
                <h2 className="text-5xl font-extrabold text-gray-900 mb-2">{temperature}°C</h2>
                <p className="text-lg text-gray-700 font-semibold">Humidity: <span className="font-bold">{humidity}%</span></p>
                <p className="text-lg text-gray-700 font-semibold">Wind Speed: <span className="font-bold">{windSpeed} km/h</span></p>
            </div>
        </div>
    );
};

export default WeatherCard;
