import React from "react";
import heroimg from "../assets/Images/heroimg2.jpg";
import cup from "../assets/Icons/coffeecup.svg";
import iced from "../assets/Icons/iced.svg";
import latte from "../assets/Icons/latte.svg";
import details from "../assets/Icons/details.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 px-10 py-16">
      {/* Left Section */}
      <div className="max-w-2xl space-y-6 text-center lg:text-left">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-[#086942] flex items-center gap-2">
          HOW TO: STARBUCKS
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Your ultimate guide to making the most amazing coffee with detailed instructions.
        </p>

        {/* Call-to-Action Button */}
        <div>
          <Link to="/login">
            <button className="bg-[#086942] text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-[#075c39] transition-all duration-300 shadow-md">
              Get Started →
            </button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 gap-6 pt-8">
          <FeatureItem icon={latte} text="Over 100 recipes available" />
          <FeatureItem icon={iced} text="Several categories to choose from" />
          <FeatureItem icon={cup} text="Recipes for both cold and hot drinks" />
          <FeatureItem icon={details} text="Detailed step-by-step instructions" />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="mt-10 lg:mt-0">
        <img
          src={heroimg}
          alt="Hero"
          className="rounded-lg lg:rounded-s-full shadow-lg max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-gray-300 p-3 rounded-full">
        <img src={icon} alt="Feature Icon" className="w-10 h-10" />
      </div>
      <h3 className="text-gray-700 font-semibold text-lg">{text}</h3>
    </div>
  );
};

export default Hero;
