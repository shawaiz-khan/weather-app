/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlide from '../components/HeroSlide';
import WeatherForm from '../components/WeatherForm';

export default function Home() {
    return (
        <main>
            <nav className="absolute top-0 left-0 right-0 z-20 px-5 pt-3">
                <Navbar />
            </nav>
            <section className="relative h-[39.2rem] bg-center bg-cover bg-fixed">
                <HeroSlide />
            </section>
            <section className='h-fit bg-seaBlue-950 px-3 py-3'>
                <WeatherForm />
            </section>
        </main>
    )
}
