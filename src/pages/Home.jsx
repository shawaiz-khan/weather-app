/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlide from '../components/HeroSlide';

export default function Home() {
    return (
        <main>
            <section className="relative h-[38rem] bg-center bg-cover bg-fixed">
                <nav className="absolute top-0 left-0 right-0 z-20 px-5 pt-3">
                    <Navbar />
                </nav>
                <div className="relative h-full z-10">
                    <HeroSlide />
                </div>
            </section>

        </main>
    )
}
