/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlide from '../components/HeroSlide';
import WeatherForm from '../components/WeatherForm';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen'>
            <nav className="absolute top-0 left-0 right-0 z-20 px-5 pt-3">
                <Navbar />
            </nav>
            <section className='flex-1'>
                <section className="relative min-h-screen bg-center bg-cover bg-fixed">
                    <HeroSlide />
                </section>
                <section className="max-h-screen h-screen relative flex flex-col justify-center items-center py-12 px-4 md:py-16 md:px-8 lg:px-16 bg-white" id='weather-card'>
                    <div className="container mx-auto max-w-screen-lg">
                        <WeatherForm />
                    </div>
                </section>
                <Footer />
            </section>
        </main>
    )
}
