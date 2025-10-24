'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <>
      <footer className="w-full text-center mt-20 sm:mt-24 md:mt-30 lg:mt-32 px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Amar <span className="text-red-600">.</span>
        </h1>

        {/* Email Section */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
          <Image
            src={assets.mail_icon}
            alt="email"
            className="w-6 sm:w-7 md:w-8"
          />
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">
            amaromar6044@gmail.com
          </h4>
        </div>

        {/* Horizontal Line */}
        <hr className="mt-8 sm:mt-10 md:mt-12 w-full sm:w-4/5 md:w-3/4 mx-auto border-gray-300" />

        {/* Bottom Section */}
        <div className="my-6 sm:my-8 md:my-10 w-full sm:w-4/5 md:w-3/4 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <h4
            className={`font-light text-xs sm:text-sm md:text-base text-gray-600 order-2 sm:order-1" ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
            }`}
          >
            © 2025 Amar Omar. All rights reserved.
          </h4>

          {/* Social Links */}
          <ul className="flex gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg md:text-xl order-1 sm:order-2">
            <li>
              <Link
               target="blank"
                href="https://github.com/amar-omar"
                className="hover:text-gray-400 transition-colors duration-300 text-sm sm:text-base"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
               target="blank"
                href="https://www.linkedin.com/in/amar-omar-379906200/"
                className="hover:text-gray-400  transition-colors duration-300 text-sm sm:text-base"
              >
                Linkedin
              </Link>
            </li>
            <li>
              <Link
              target="blank"
                href="https://www.instagram.com/amaromar6844/"
                className="hover:text-gray-400   transition-colors duration-300 text-sm sm:text-base"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
