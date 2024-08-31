/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const WeatherCard = ({ location, temperature, weatherDescription, humidity, windSpeed, weatherIcon, cardType }) => {
    const cardClass = cardType === 'type1' 
        ? 'bg-white shadow-md rounded-lg' 
        : 'bg-white shadow-xl rounded-lg';

    return (
        <div className={`weather-card p-4 sm:p-6 md:p-8 ${cardClass} grid grid-cols-1 md:grid-cols-2 items-center gap-6`}>
            {/* Left Column */}
            <div className="flex flex-col items-center justify-center text-center md:text-left">
                <img 
                    src={weatherIcon} 
                    alt="Weather Icon" 
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-4" 
                />
                <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{location}</p>
                <p className="text-sm sm:text-md text-gray-600 font-medium">{weatherDescription}</p>
            </div>
            {/* Right Column */}
            <div className="flex flex-col items-center justify-center text-center md:text-right">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
                    {temperature}°C
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    Humidity: <span className="font-bold">{humidity}%</span>
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    Wind Speed: <span className="font-bold">{windSpeed} km/h</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherCard;
