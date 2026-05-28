import React from "react";
import Story from "../assets/story.png";

const StorySection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Image Design */}
          <div className="relative flex justify-center lg:block">

            {/* Background Box */}
            <div className="absolute -bottom-0 lg:-bottom-15 left-1/2 lg:-left-15 -translate-x-1/2 lg:translate-x-0 w-72 h-72 sm:w-96 sm:h-96 lg:size-112.5 bg-[#f3b164]"></div>

            {/* Main Image */}
            <div className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 lg:size-112.5 bg-black flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={Story}
                alt="story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">

            {/* Small Title */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="w-10 h-[2px] bg-[#d8a15c]"></div>

              <p className="uppercase tracking-[3px] text-sm text-gray-700">
                Our Story
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#222] mb-8">
              Inspirational Watch of this year
            </h2>

            {/* Paragraph */}
            <p className="text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
              The latest and modern watches of this year, is available in
              various presentations in this store, discover them now.
            </p>

            {/* Button */}
            <button className="bg-[#222] text-white px-8 py-4 hover:bg-[#d8a15c] transition duration-300 shadow-lg cursor-pointer">
              Discover
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;