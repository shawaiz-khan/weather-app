import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherForm() {
    const [form, setForm] = useState({
        city: '',
        country: '',
    });
    const [weather, setWeather] = useState(null);

    const fetchWeatherData = async (city = 'London', country = '') => {
        try {
            const query = city || 'London';
            const response = await fetch(`/api/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${query}&aqi=no`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const { location, current } = data;
            const { name, region, country: locCountry } = location;
            const { temp_c, temp_f, condition, wind_mph, wind_kph, humidity, feelslike_c, feelslike_f } = current;

            setWeather({
                location: `${name}, ${region}, ${locCountry}`,
                temperature: {
                    celsius: temp_c,
                    fahrenheit: temp_f
                },
                weatherDescription: condition.text,
                humidity,
                windSpeed: {
                    mph: wind_mph,
                    kph: wind_kph
                },
                feelsLike: {
                    celsius: feelslike_c,
                    fahrenheit: feelslike_f
                },
                weatherCondition: {
                    text: condition.text,
                    icon: condition.icon
                }
            });

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        fetchWeatherData();
        console.log('Clean')
    }, []);

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        const { city, country } = form;
        fetchWeatherData(city || 'London', country || 'USA');
        setForm({
            city: '',
            country: ''
        });
    };

    return (
        <>
            <form onSubmit={HandleSubmit} className='flex justify-center gap-10 h-fit bg-seaBlue-950 p-3 items-center align-middle'>
                <input
                    type="text"
                    placeholder='City'
                    value={form.city}
                    name='city'
                    onChange={HandleChange}
                    className='px-3 py-1 rounded-md'
                />
                <input
                    type="text"
                    placeholder='Country'
                    value={form.country}
                    name='country'
                    onChange={HandleChange}
                    className='px-3 py-1 rounded-md'
                />
                <button type="submit" className='bg-seaBlue-600 hover:bg-seaBlue-800 text-white px-10 py-1 rounded-md transition-all duration-300 ease-in'>Search</button>
            </form>
            <article>
                {weather && (
                    <WeatherCard
                        location={weather.location}
                        temperature={weather.temperature.celsius}
                        weatherDescription={weather.weatherDescription}
                        humidity={weather.humidity}
                        windSpeed={weather.windSpeed.kph}
                        feelsLike={weather.feelsLike.celsius}
                        weatherIcon={weather.weatherCondition.icon}
                    />
                )}
            </article>
        </>
    );
}
