import React from "react";
import Featured1 from "../assets/featured1.png";
import Featured2 from "../assets/featured2.png";
import Featured3 from "../assets/featured3.png";

const featuredWatches = [
  {
    name: "JAZZMASTER",
    price: "$1050",
    image: Featured1,
  },
  {
    name: "INGERSOLL",
    price: "$250",
    image: Featured2,
  },
  {
    name: "ROSE GOLD",
    price: "$890",
    image: Featured3,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col items-center mb-20">
          <div className="w-14 h-[2px] bg-[#d8a15c] mb-3"></div>

          <h2 className="uppercase tracking-[3px] text-sm font-semibold text-black">
            Featured
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {featuredWatches.map((watch, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 relative overflow-hidden hover:-translate-y-2 transition duration-500 hover:shadow-2xl cursor-pointer"
            >
              
              {/* Sale Badge */}
              <div className="absolute top-4 left-0 bg-[#f3b164] text-white text-xs px-6 py-2 rotate-270  tracking-[2px] z-20">
                SALE
              </div>

              {/* Image */}
              <div className="h-[320px] flex items-center justify-center bg-white overflow-hidden">
                <div className="w-[180px] h-[220px] flex items-center justify-center text-gray-600 group-hover:scale-110 transition duration-500">
                  <img src={watch.image} alt="" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center pb-10">
                <h3 className="font-bold tracking-[2px] text-sm mb-3">
                  {watch.name}
                </h3>

                <p className="text-[#d8a15c] font-medium mb-6">
                  {watch.price}
                </p>

                <button className="bg-[#222] text-white px-8 py-3 text-sm hover:bg-[#d8a15c] transition duration-300 cursor-pointer">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;