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
            className="h-full"
        >
            {slides.map((slide) => {
                const { id, heading, paragraph, image, icon } = slide;
                console.log(id);
                return (
                    <SwiperSlide key={id}>
                        <div
                            className="relative h-full bg-center bg-cover flex flex-col justify-center"
                            style={{ backgroundImage: `url(${image})` }}
                        >
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-8 p-16 justify-between">
                                <article className="flex flex-col justify-center max-w-2xl">
                                    <h1 className="text-5xl font-bold text-white mb-4">{heading}</h1>
                                    <p className="text-lg text-white max-w-md">{paragraph}</p>
                                </article>
                                <div className="flex items-center justify-end">
                                    <img src={icon} alt="" className="max-w-60" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
