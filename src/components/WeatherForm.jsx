import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherForm() {
    const [form, setForm] = useState({ city: '' });
    const [weather, setWeather] = useState(null);

    const fetchWeatherData = async (city = 'London') => {
        try {
            const response = await fetch(`/api/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

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
        } catch (err) {
            console.log(err);
            alert('Enter a valid city')
            if (city !== 'London') {
                fetchWeatherData('London');
            }
        }
    };

    useEffect(() => {
        fetchWeatherData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        const { city } = form;
        fetchWeatherData(city || 'London');
        setForm({ city: '' });
    };

    return (
        <>
            <form onSubmit={HandleSubmit} className='flex justify-center gap-10 h-fit bg-seaBlue-950 p-5 items-center align-middle'>
                <input
                    type="text"
                    placeholder='City'
                    value={form.city}
                    name='city'
                    onChange={HandleChange}
                    className='w-96 px-3 py-2 rounded-md'
                    aria-label="City"
                />
                <button type="submit" className='bg-seaBlue-600 hover:bg-seaBlue-800 text-white px-10 py-2 rounded-md transition-all duration-300 ease-in'>
                    Search
                </button>
            </form>
            <article id='weather-card'>
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
