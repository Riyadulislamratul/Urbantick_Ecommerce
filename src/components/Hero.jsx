import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Hero1 from "../assets/hero1.png";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "The Watch Everyone Desires!",
    desc: "The best in class elegant watches from the luxury brand.",
    image: Hero3,
  },
  {
    title: "Luxury Meets Simplicity",
    desc: "Minimal watches crafted for timeless elegance.",
    image: Hero2,
  },
];

const Hero = () => {
  return (
    <section >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-[700px] flex items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-xl space-y-6 text-white">
                  
                  <p className="uppercase tracking-[3px] text-sm text-red-400">
                    Watch Store
                  </p>

                  <h1 className="text-5xl md:text-7xl font-light leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-gray-200 text-lg">
                    {slide.desc}
                  </p>

                  <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300">
                    See More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;