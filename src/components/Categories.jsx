import React from "react";

import Men from "../assets/men.jpg";
import Women from "../assets/women.jpg";
import Steel from "../assets/steel.jpg";
import Leather from "../assets/leather.jpg";

const categories = [
  "Women's Watches",
  "Steel Bracelet Watches",
  "Leather Watches",
  "Men's Watches",
];

const Categories = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold mb-4">
            View Our Range Of Categories
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our curated watch collections from classic designs to modern
            styles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Left Large Card */}
          <div className="relative group overflow-hidden rounded-3xl h-[500px] bg-gray-300 flex items-end p-6 cursor-pointer">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

            <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl group-hover:scale-110 transition duration-500">
              <img src={Women} alt="" />
            </div>

            <h3 className="relative text-white text-xl font-semibold z-10 group-hover:scale-110 transition duration-500 group-hover:text-[#d8a15c]">
              {categories[0]}
            </h3>
          </div>

          {/* Middle */}
          <div className="flex flex-col gap-6">
            
            <div className="relative group overflow-hidden rounded-3xl h-[240px] bg-gray-300 flex items-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl group-hover:scale-110 transition duration-500">
                <img src={Steel} alt="" />
              </div>

              <h3 className="relative text-white text-lg font-semibold z-10 group-hover:scale-110 transition duration-500 group-hover:text-[#d8a15c]">
                {categories[1]}
              </h3>
            </div>

            <div className="relative group overflow-hidden rounded-3xl h-[240px] bg-gray-300 flex items-end p-6 cursor-pointer">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl group-hover:scale-110 transition duration-500">
                <img src={Leather} alt="" />
              </div>

              <h3 className="relative text-white text-lg font-semibold z-10 group-hover:scale-110 transition duration-500 group-hover:text-[#d8a15c]">
                {categories[2]}
              </h3>
            </div>
          </div>

          {/* Right Large */}
          <div className="relative group overflow-hidden rounded-3xl h-[500px] bg-gray-300 flex items-end p-6 cursor-pointer">
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500"></div>

            <div className="absolute inset-0 flex items-center justify-center text-gray-700 text-xl group-hover:scale-110 transition duration-500">
              <img src={Men} alt="" />
            </div>

            <h3 className="relative text-white text-xl font-semibold z-10 group-hover:scale-110 transition duration-500 group-hover:text-[#d8a15c]">
              {categories[3]}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;