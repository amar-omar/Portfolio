"use client";
import { assets } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
export default function Header() {
  return (
    <>
      <header
        className="top-0 left-0 right-0 z-40 flex flex-col justify-center items-center gap-4 lg:gap-6 pt-20 md:pt-32 lg:pt-42 px-4"
        id="header"
      >
        <motion.div
          className=""
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <Image
            src={assets.Amar}
            alt="Me"
            className="rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
          />
        </motion.div>

        <motion.h4
          className="text-xl md:text-2xl lg:text-3xl font-light flex items-center gap-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hi! I&apos;m Amar Omar
          <Image
            src={assets.hand_icon}
            alt="Hand_Icon"
            className="w-5 md:w-6 lg:w-7"
          />
        </motion.h4>

        <div className="text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Frontend Web Developer <br />
            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              based in Egypt
            </span>
          </motion.h1>
          <motion.p
            className="font-light my-2 text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            I am a Frontend Developer from Egypt , and I am a Fresh Graduate{" "}
            <br /> i enjoy building sites & apps . My Foucs in React (Next.js )
            .
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full max-w-md md:max-w-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="mailto:amaromar6044@gmail.com?subject=Let's Connect&body=Hi Amar, I'd like to connect with you regarding..."
            className="bg-gray-800 text-white px-4 py-3 md:px-6 md:py-4 hover:bg-gray-900  rounded-full flex items-center justify-center gap-2  transition-colors text-sm md:text-base w-full sm:w-auto"
          >
            connect me here
            <Image
              src={assets.right_arrow_white}
              alt="right-arrow"
              className="w-3 md:w-4"
            />
          </Link>

          <Link
            href="/Amar_Omar_Kamel-Front_End[1].pdf"
            download
            className="bg-white text-black px-4 py-3 md:px-6 md:py-4 rounded-full border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors text-sm md:text-base w-full sm:w-auto"
          >
            Download CV
            <Image
              src={assets.download_icon}
              alt="download"
              className="w-3 md:w-4"
            />
          </Link>
        </motion.div>
      </header>
    </>
  );
}
