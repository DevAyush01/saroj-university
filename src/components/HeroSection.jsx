import React from "react";
import heroImage from "../assets/bg.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[90vh]">
        
        {/* Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-md mx-auto md:mx-0 w-full">
          <h2 className="text-lg sm:text-xl font-bold mb-2">Apply Today For</h2>
          <p className="text-sm sm:text-base mb-4 text-blue-600 font-semibold">
            Saroj International University Programs
            <br />
            <span className="text-xs">
              Registration Ends: 10<sup>th</sup> June 2025
            </span>
          </p>
        </div>

        {/* Text Section */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            SAROJ INTERNATIONAL UNIVERSITY
          </h1>
          <p className="text-sm sm:text-base mt-4 leading-relaxed">
            In an era propelled by the advent of artificial intelligence,
            Chandigarh University, Uttar Pradesh, has embraced a
            multidisciplinary education model enriched by AI integration...
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition">
            APPLY NOW →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
