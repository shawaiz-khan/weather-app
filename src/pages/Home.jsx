/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlide from '../components/HeroSlide';
import WeatherForm from '../components/WeatherForm';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className='h-full'>
            <nav className="absolute top-0 left-0 right-0 z-20 px-5 pt-3">
                <Navbar />
            </nav>
            <section className='h-full bg-gray-600'>
                <section className="relative h-[30rem] bg-center bg-cover bg-fixed">
                    <HeroSlide />
                    <WeatherForm />
                    <Footer />
                </section>
            </section>
        </main>
    )
}
