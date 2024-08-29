/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/images/heroImg.jpg';

export default function Home() {
    return (
        <main>
            {/* Hero Section  */}
            <section
                className="relative h-[35rem] bg-center bg-cover bg-fixed flex flex-col justify-between"
                style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Navigation Bar */}
                <nav className="relative z-10 px-5 pt-5">
                    <Navbar />
                </nav>
                {/* Main Content */}
                <div className="relative z-10 flex-grow flex flex-col justify-center pl-16">
                    <h1 className="text-5xl font-bold text-white mb-4">BrightCast</h1>
                    <p className="text-lg text-white max-w-md">Discover real-time weather updates, detailed forecasts, and
                        insights tailored to your location. Stay prepared for any weather, day or night, with BrightCast.</p>
                </div>
            </section>
        </main>
    )
}
