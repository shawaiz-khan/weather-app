import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SunnyCloud from '../assets/icons/sunny_cloud.png';
import ClearCloud from '../assets/icons/clear_cloud.png';
import RainCloud from '../assets/icons/rain_cloud.png';
import ThunderCloud from '../assets/icons/thunder_cloud.png';
import bgImage1 from '../assets/images/heroImg.jpg';
import bgImage2 from '../assets/images/heroImg5.jpg';
import bgImage3 from '../assets/images/heroImg6.jpg';
import bgImage4 from '../assets/images/heroImg9.jpg';

// eslint-disable-next-line react-refresh/only-export-components
export const slides = [
    {
        id: 1,
        heading: "Stay Ahead with Real Time Weather Alerts",
        paragraph: "Get instant updates on changing weather conditions in your area. Be prepared for every moment, whether it's sunshine, rain, or a storm.",
        image: bgImage1,
        icon: ThunderCloud,
    },
    {
        id: 2,
        heading: "Plan Your Week with Accurate Forecasts",
        paragraph: "Access detailed daily and weekly forecasts to plan your activities with confidence. Know what to expect and make the most of your days.",
        image: bgImage3,
        icon: RainCloud,
    },
    {
        id: 3,
        heading: "A Weather Experience Tailored to You",
        paragraph: "Enjoy a beautiful, easy-to-use interface with light and dark mode options. BrightCast makes checking the weather a delightful experience anytime.",
        image: bgImage2,
        icon: SunnyCloud,
    },
    {
        id: 4,
        heading: "Plan Your Week with Accurate Forecasts",
        paragraph: "Access detailed daily and weekly forecasts to plan your activities with confidence. Know what to expect and make the most of your days.",
        image: bgImage4,
        icon: ClearCloud,
    },
];

export default function HeroSlide() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="h-screen"
        >
            {slides.map((slide) => {
                const { id, heading, paragraph, image, icon } = slide;
                return (
                    <SwiperSlide key={id}>
                        <div
                            className="relative h-full bg-center bg-cover flex flex-col justify-center"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 lg:p-16">
                                <article className="flex flex-col justify-center text-center md:text-left max-w-full md:max-w-2xl mx-auto md:mx-0">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{heading}</h1>
                                    <p className="text-base md:text-lg lg:text-xl text-white max-w-xs md:max-w-md mx-auto md:mx-0">{paragraph}</p>
                                </article>
                                <div className="flex items-center justify-center md:justify-end">
                                    <img src={icon} alt="" className="w-32 md:w-40 lg:w-60" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}