import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherForm() {
    const [form, setForm] = useState({ city: '', country: '' });
    const [weather, setWeather] = useState(null);

    const fetchWeatherData = async (city = 'London', country = '') => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const primaryApiUrl = import.meta.env.VITE_API_URL;
        const alternativeApiKey = '142ed2d794e941c7831140223242808';
        const alternativeApiUrl = import.meta.env.VITE_ALTERNATIVE_API_URL;
        
        if (!apiKey && !alternativeApiKey) {
            console.error('API Key is missing.');
            return;
        }

        const query = country ? `${city}, ${country}` : city;

        const fetchFromUrl = async (url, key) => {
            try {
                const response = await fetch(`${url}?key=${key}&q=${query}&aqi=no`);
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }
                return await response.json();
            } catch (err) {
                console.error('Fetch error:', err);
                return null;
            }
        };

        let data = await fetchFromUrl(primaryApiUrl, apiKey);

        if (!data) {
            console.log('Primary API URL failed. Trying alternative API URL.');
            data = await fetchFromUrl(alternativeApiUrl, alternativeApiKey);
        }

        if (data) {
            const { location, current } = data;
            const { name, country: locCountry } = location;
            const { temp_c, temp_f, condition, wind_mph, wind_kph, humidity, feelslike_c, feelslike_f } = current;

            setWeather({
                location: `${name}, ${locCountry}`,
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
        } else {
            console.error('Both API URLs failed.');
            alert('Unable to fetch weather data. Please try again later.');
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { city, country } = form;
        fetchWeatherData(city || 'London', country);
        setForm({ city: '', country: '' });
    };

    return (
        <div className="p-4 md:p-8">
            <form onSubmit={handleSubmit} className='flex flex-col md:flex-row justify-center gap-4 md:gap-6 bg-seaBlue-950 p-4 md:p-6 rounded-lg shadow-md'>
                <input
                    type="text"
                    placeholder='City'
                    value={form.city}
                    name='city'
                    onChange={handleChange}
                    className='w-full md:w-80 px-4 py-2 rounded-md text-black'
                    aria-label="City"
                />
                <input
                    type="text"
                    placeholder='Country (optional)'
                    value={form.country}
                    name='country'
                    onChange={handleChange}
                    className='w-full md:w-80 px-4 py-2 rounded-md text-black'
                    aria-label="Country"
                />
                <button type="submit" className='bg-seaBlue-600 hover:bg-seaBlue-800 text-white px-6 py-2 rounded-md transition-all duration-300 ease-in'>
                    Search
                </button>
            </form>
            <article className='mt-6'>
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
        </div>
    );
}
