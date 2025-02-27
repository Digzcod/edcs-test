"use client";
import React from "react";
import { HeroSectionDashboardImage } from "./SvgImages";

const HeroSection = () => {
  return (
    <section className="bg-[#f5e3b4] py-16 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          {`Get Started with EDCS`}
        </h1>
        <p className="text-center  text-xs text-gray-700 mt-4 px-4 md:px-12">
         { `Manage enrollment data faster and easier with EDCS. HEIs can submit
          reports seamlessly, while CHED users can track and review data in real
          time, ensuring a smooth and efficient process for all.`}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-[13px] sm:text-md sm:font-semibold hover:bg-blue-800 transition">
            Login
          </button>
          <button className="bg-white text-black border px-6 py-3 rounded-lg text-[13px] sm:text-md sm:font-semibold hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Dashboard Preview Image */}
      <div className="mt-12 flex justify-center mb-[-10rem]">
        <HeroSectionDashboardImage className=""/>
      </div>
    </section>
  );
};

export default HeroSection;
