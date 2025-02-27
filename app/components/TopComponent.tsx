import React from "react";
import { TopEdcsImage } from "./SvgImages";

const TopComponent = () => {
  return (
    <div className="w-full xl:w-[1400px] md:mx-auto  flex justify-center gap-y-[4rem]  md:gap-2 flex-wrap items-center mt-[3rem] px-2">
      <section className="w-auto sm:w-[40%] ">
        <div className="space-y-[1rem]">
        <h1 className="w-[350px] lg:w-[500px] text-[18px] sm:text-[2rem] lg:text-4xl font-bold bg-gradient-to-r from-red-500 via-purple-700 to-blue-700 text-transparent bg-clip-text">
            {"Centralized Enrollment & Performance Tracking for HEIs"}
          </h1>
          <p className="w-auto xl:w-[500px] text-gray-600 text-[14px]">
            {
              "Streamline data collection and monitoring for Higher Education Institutions (HEIs) in the Philippines with a unified system for accurate insights and informed decision-making."
            }
          </p>
        </div>
        <button className="mt-[2rem] px-3 py-2 bg-blue-800 text-white text-[13px] sm:text-md rounded-md hover:bg-blue-600">Get Started</button>
      </section>
      <section className="">
        <div className="w-full xs:[300px] lg:w-[600px]">
          <TopEdcsImage className="drop-shadow-md" />
        </div>
      </section>
    </div>
  );
};

export default TopComponent;
