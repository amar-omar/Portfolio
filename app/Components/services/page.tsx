"use client";
import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import Link from "next/link";
import { motion } from "motion/react";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Services() {
  const { theme } = useTheme();

  return (
    <>
      <motion.section
        className="text-center pt-24 md:pt-32 lg:pt-48 px-4 sm:px-6 lg:px-8"
        id="services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h4
          className="text-lg sm:text-xl mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          What I offer
        </motion.h4>
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-sans"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          My Services
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          I am a Frontend developer from Egypt
        </motion.p>

        <motion.div
          whileHover={{ scale: 1 }}
          className="flex flex-col sm:grid sm:grid-cols-2 mx-10 text-start  lg:flex lg:flex-row mt-8 sm:mt-10 lg:mt-12 justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-20 items-stretch"
        >
          {serviceData.map(({ icon, title, description, link }, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              key={index}
              className={` ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}"border-[0.5px] border-gray-400 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 rounded-xl cursor-pointer  hover:-translate-y-1 duration-500 shadow-md hover:shadow-lg hover:shadow-rose-100 w-full max-w-sm mx-auto sm:max-w-none"`}
            >
              <Image
                src={icon}
                alt={title}
                className="w-12 sm:w-14 lg:w-16  text-start"
              />
              <h3 className={`font-semibold text-gray-700 my-3 sm:my-4 text-lg sm:text-xl"  ${theme === 'dark' ? ' text-white' : 'bg-white text-black'}`}>
                {title}
              </h3>
              <p className={`text-gray-600 text-xs sm:text-sm leading-relaxed"  ${theme === 'dark' ? ' text-white' : 'bg-white text-black'}`}>
                {description}
              </p>
              {/* <Link
                href={link}
                className="flex gap-2 items-center text-xs sm:text-sm mt-4 sm:mt-5 justify-center lg:justify-start"
              >
                read more
                <Image
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  src={assets.right_arrow}
                  alt="Arrow"
                />
              </Link> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

