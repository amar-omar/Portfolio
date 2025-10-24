"use client";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";
import ThemeToggle from "../ThemeToggle";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/contexts/ThemeContext";
export default function Navbar() {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const [IsScroll, setIsScroll] = useState(false);
  const { theme } = useTheme();
  function openMenu() {
    // @ts-ignore
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeMenu = () => {
    // @ts-ignore
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between items-center p-4 sm:p-6 lg:px-8 xl:px-[8%] top-0 left-0 right-0 w-full fixed z-50 bg-background ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }${IsScroll ? " bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              Amar
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div
          className={` p-2 sm:p-3 md:p-4 rounded-full ${
            IsScroll
              ? ""
              : "bg-opacity-50 shadow-sm " +
                (theme === "dark" ? "bg-gray-800" : "bg-white")
          }`}
        >
          <ul className="gap-4 sm:gap-6 lg:gap-8 text-base sm:text-lg hidden md:flex">
            <li>
              <Link
                href="#header"
                className="hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-gray-600 transition-colors"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-gray-600 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#work"
                className="hover:text-gray-600 transition-colors"
              >
                My Work
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-gray-600 transition-colors"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Theme, Contact, Menu */}
        <div className=" flex items-center gap-2 sm:gap-3 md:gap-4">
          <ThemeToggle />

          {/* Contact - Hidden on mobile, visible on tablet and up */}
          <div
            className={`hidden sm:flex bg-white items-center text-base md:text-lg border border-black/20 p-2 sm:p-3 md:p-4 px-6 sm:px-8 md:px-10 rounded-full shadow-sm opacity-50" ${
              theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-black"
            }`}
          >
            <Link
              href="#contact"
              className="flex items-center gap-2 hover:text-gray-600  transition-colors"
            >
              <span
                className={`${
                  theme === "dark" ? " text-black" : "bg-white text-black"
                }`}
              >
                Contact
              </span>
              <Image
                alt="Arrow"
                src={assets.arrow_icon}
                width={12}
                height={12}
                className="w-3 h-auto"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="block md:hidden cursor-pointer ml-1 sm:ml-2"
            onClick={openMenu}
          >
            <Image
              alt="Menu"
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              className="w-5 sm:w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className={`flex flex-col md:hidden py-20 px-6 sm:px-8 fixed top-0 bottom-0 w-64 sm:w-72 z-50 h-screen rounded-2xl -right-64 transition-all duration-500 shadow-md gap-6 text-center ${
            theme === "dark"
              ? "bg-gray-800 text-white"
              : "bg-rose-50 text-black"
          }`}
        >
          {/* Close button */}
          <div className="absolute top-6 right-6" onClick={closeMenu} id="open">
            <Image
              src={theme === "dark" ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5 sm:w-6 cursor-pointer"
            />
          </div>

          {/* Menu items */}
          <li className="border-b border-gray-200 pb-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-lg sm:text-xl hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link
              onClick={closeMenu}
              href="#about"
              className="text-lg sm:text-xl hover:text-gray-600 transition-colors"
            >
              About me
            </Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link
              onClick={closeMenu}
              href="#services"
              className="text-lg sm:text-xl hover:text-gray-600 transition-colors"
            >
              Services
            </Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link
              onClick={closeMenu}
              href="#work"
              className="text-lg sm:text-xl hover:text-gray-600 transition-colors"
            >
              My Work
            </Link>
          </li>
          <li className="border-b border-gray-200 pb-2">
            <Link
              onClick={closeMenu}
              href="#contact"
              className="text-lg sm:text-xl hover:text-gray-600 transition-colors"
            >
              Testimonials
            </Link>
          </li>

          {/* Mobile Contact Button */}
          <li className="pt-4">
            <Link
              href="#contact"
              onClick={closeMenu}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-gray-700 transition-colors duration-300 ${
                theme === "dark"
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-black/20"
              }`}
            >
              <span>Contact</span>
              <Image
                alt="Arrow"
                src={assets.arrow_icon}
                width={12}
                height={12}
                className="w-3 h-auto"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
