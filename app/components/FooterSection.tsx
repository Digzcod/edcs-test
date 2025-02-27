"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { LogoEdcs } from "./SvgImages";

const FooterSection = () => {
  return (
    <footer className="h-[200px] bg-white border-t border-gray-300 py-6 px-8 mt-[6rem]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <LogoEdcs className="w-full" />
        </div>

        {/* Divider */}
        <div className="w-full my-4 md:hidden"></div>

        {/* Copyright */}
        <p className="text-gray-600 text-sm">© 2025 CHED EDCS. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-black text-lg hover:text-gray-700 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-black text-lg hover:text-gray-700 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-black text-lg hover:text-gray-700 transition">
            <FaGooglePlusG />
          </a>
          <a href="#" className="text-black text-lg hover:text-gray-700 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
