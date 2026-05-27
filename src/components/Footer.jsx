import React from "react";
import FB from "../assets/icons/fb.png";
import IG from "../assets/icons/ig.png";
import X from "../assets/icons/x.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#02111d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl tracking-[6px] font-light">URBANTICK</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition cursor-pointer">
                Men
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Women
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition cursor-pointer">
                Order Status
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Product Support
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Shipping & Return Policy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Complaint Registration
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
              About Us
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms of Use
              </li>

              <li className="hover:text-white transition cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
              Contact
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>Email : urbantick@gmail.com</p>
              <p>Phone : +91 9999888899</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-5 uppercase text-sm tracking-wider">
              Connect with us
            </h3>

            <div className="flex items-center gap-5">
              <Link to="/">
                <img src={FB} alt="" className="size-8" />
              </Link>
              <Link to="/">
                <img src={IG} alt="" className="size-8"/>
              </Link>
              <Link to="/" >
                <img src={X} alt="" className="size-8"/>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-gray-400 text-sm">
          © 2024 UrbanTick All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
