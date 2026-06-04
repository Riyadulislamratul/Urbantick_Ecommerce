import React from "react";
import Watch1 from "../assets/watch1.png";
import Watch2 from "../assets/watch2.png";
import Watch3 from "../assets/watch3.png";
import Watch4 from "../assets/watch4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const watches = [
  {
    name: "Chronographs",
    price: "$1,500",
    image: Watch1,
  },
  {
    name: "Aviator Watches",
    price: "$2,000",
    image: Watch2,
  },
  {
    name: "ONLYOU 3rd edition",
    price: "$3,000",
    image: Watch1,
  },
  {
    name: "SunMate Green Edition",
    price: "$2,000",
    image: Watch3,
  },
  {
    name: "Chronographs",
    price: "$1,500",
    image: Watch4,
  },
  {
    name: "Aviator Watches",
    price: "$2,000",
    image: Watch2,
  },
];

const NewLaunches = () => {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-14">
          New Launches
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          spaceBetween={25}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
          {watches.map((watch, index) => (
            <SwiperSlide key={index}>
              <div className="group">
                
                {/* Image Placeholder */}
                <div className="bg-[#eeeeee] rounded-2xl h-[280px] flex items-center justify-center overflow-hidden cursor-pointer">
                  <div className="group-hover:scale-110 transition duration-500 text-gray-500 text-lg">
                    <img src={watch.image} alt={watch.name} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium group-hover:text-black transition">
                    {watch.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {watch.price}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewLaunches;


