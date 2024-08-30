/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSlide from '../components/HeroSlide';

export default function Home() {
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
    }

    return (
        <main>
            <nav className="absolute top-0 left-0 right-0 z-20 px-5 pt-3">
                <Navbar />
            </nav>
            <section className="relative h-[39.2rem] bg-center bg-cover bg-fixed">
                <HeroSlide />
            </section>
            <article className='h-fit bg-blue-900 px-3 py-3'>
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
                    <button className='bg-blue-600 hover:bg-blue-950 text-white  px-10 py-1 rounded-md transition-all duration-300 ease-in'>Search</button>
                </form>
            </article>
        </main>
    )
}
