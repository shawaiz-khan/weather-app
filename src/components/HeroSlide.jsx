import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import backgroundImage from '../assets/images/heroImg.jpg';
import backgroundImage2 from '../assets/images/heroImg2.jpg';
import SunnyCloud from '../assets/icons/sunny_cloud.png';
import ThunderCloud from '../assets/icons/rain_cloud.png';

export default function HeroSlide() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="h-full"
        >
            <SwiperSlide>
                <div className="relative h-full bg-center bg-cover flex flex-col justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-8 p-16">
                        <article className="flex flex-col justify-center max-w-2xl">
                            <h1 className="text-5xl font-bold text-white mb-4">Plan Your Week with Accurate Forecasts</h1>
                            <p className="text-lg text-white max-w-md">Access detailed daily and weekly forecasts to plan your activities with confidence. Know what to expect and make the most of your days.</p>
                        </article>
                        <div className="flex items-center justify-center">
                            <img src={ThunderCloud} alt="" className="max-w-80" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="relative h-full bg-center bg-cover flex flex-col justify-center" style={{ backgroundImage: `url(${backgroundImage2})` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 grid grid-cols-2 gap-8 p-16">
                        <article className="flex flex-col justify-center max-w-2xl">
                            <h1 className="text-5xl font-bold text-white mb-4">Plan Your Week with Accurate Forecasts</h1>
                            <p className="text-lg text-white max-w-md">Access detailed daily and weekly forecasts to plan your activities with confidence. Know what to expect and make the most of your days.</p>
                        </article>
                        <div className="flex items-center justify-center">
                            <img src={SunnyCloud} alt="" className="max-w-80" />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};