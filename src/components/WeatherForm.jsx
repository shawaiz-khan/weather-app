import React, { useState } from 'react'

export default function WeatherForm() {
    const fetchWeatherData = async (city, country) => {
        try {
            const response = await fetch(`/api/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const [form, setForm] = useState({
        city: '',
        country: '',
    });

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        console.log(form);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted', form);
        fetchWeatherData(form.city, form.country);
        setForm(prevForm => ({
            city: '',
            country: ''
        }));
    }
    return (
        <form action="submit" className='flex justify-center gap-10' onSubmit={HandleSubmit}>
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
            <button className='bg-seaBlue-600 hover:bg-seaBlue-800 text-white  px-10 py-1 rounded-md transition-all duration-300 ease-in'>Search</button>
        </form>
    )
}
