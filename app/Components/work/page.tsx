"use client";
import React from "react";
import Image from "next/image";
import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";

export default function Work() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-48 px-2 sm:px-6 md:px-8"
        id="work"
      >
        {/* <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl lg:text-xl mb-2 sm:mb-3"
        >
          My portfolio
        </motion.h4> */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold"
        >
          My latest work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-[320px] sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
        >
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </motion.p>

        {/* Responsive Grid Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    sm:gap-6
    lg:gap-8
    xl:gap-10
    mt-8
    sm:mt-10
    lg:mt-12
    max-w-7xl
    mx-auto
  "
        >
          {workData.map(({ bgImage, title, description, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="
    bg-cover
    relative
    bg-no-repeat
    border-[0.5px]
    border-gray-400
    w-full
    h-[300px]
    sm:h-[300px]
    md:h-[320px]
    lg:h-[335px]
    rounded-xl
    cursor-pointer
    duration-500
    shadow-md
    hover:shadow-lg
    hover:shadow-rose-200
    group
    overflow-hidden
  "
              >
                <Image
                  src={bgImage}
                  alt={title}
                  width={335}
                  height={335}
                  className="w-full h-full object-cover rounded-xl"
                />

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] bg-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center shadow-lg">
                  <div className="flex-1 min-w-0 mr-2 sm:mr-3">
                    <h3 className="font-semibold text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-1">
                      {title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {description}
                    </p>
                  </div>
                  <div
                    className="
    shrink-0
    border
    rounded-full
    border-black
    w-8
    h-8
    sm:w-9
    sm:h-9
    flex
    justify-center
    items-center
    shadow-[2px_2px_0_#000]
    group-hover:bg-lime-300
    transition-all
  "
                  >
                    <Image
                      src={assets.send_icon}
                      className="w-3 sm:w-4 md:w-5"
                      alt="send icon"
                    />
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </motion.div>

        {/* Responsive Show More Button */}
        {/* <Link
          href=""
          className={`w-max flex items-center  justify-center gap-2   border-[0.5px] border-gray-700 rounded-full py-2 sm:py-3 px-6 sm:px-8 md:px-10 mx-auto my-12 sm:my-16 md:my-20 hover:bg-lightHover transition-colors duration-300 text-sm sm:text-base"
          `}
        >
          Show More
          <Image
            src={assets.right_arrow_bold}
            alt="arrow icon"
            className={`w-4 sm:w-5" ${theme === 'dark' ? ' text-white' : 'bg-white text-black'}`}
          />
        </Link> */}
      </motion.section>
    </>
  );
}
