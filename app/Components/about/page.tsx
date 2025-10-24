"use client";
import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <motion.section
        className="text-center pt-36 "
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <motion.h4
          className="text-xl mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          introduction
        </motion.h4> */}
        <motion.h1
          className="text-5xl font-sans"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          About me
        </motion.h1>
        <motion.div
          className="flex flex-col lg:flex-row mt-10 px-5 justify-center gap-8 lg:gap-20 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              alt="me"
              src={assets.Amar}
              className="rounded-xl"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-lg text-justify max-w-2xl mb-8">
              I am a passionate and highly motivated Frontend Web Developer,
              freshly graduated and eager to launch my career. I have a solid
              foundation in modern web technologies , and I am excited to apply
              my academic knowledge to real-world projects. I am a quick
              learner, a creative problem-solver, and ready to contribute to a
              dynamic development team.
            </h4>

            <motion.ul
              className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {infoList.map((item, index) => (
                <motion.li
                  key={index}
                  className={`border-[1px] border-gray-400 p-6 hover:bg-rose-100 rounded-xl cursor-pointer  hover:-translate-y-1 duration-500 shadow-md" ${
                    theme === "dark"
                      ? "  bg-gray-900 text-white hover:bg-rose-200"
                      : " bg-white text-black"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-7 mt-3"
                  />
                  <div
                    className={`"text-left" ${
                      theme === "dark" ? "  text-white" : " text-black"
                    }`}
                  >
                    <h3 className="font-semibold  my-4 text-start">
                      {item.title}
                    </h3>
                    <p className=" text-sm text-start">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.h4
              className={`text-start text-gray-700 my-6 fle" ${
                theme === "dark" ? "my-6 text-white" : " text-black"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Tools i use
            </motion.h4>
            <motion.ul
              className="flex items-center gap-3 sm:gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                  whileInView={{ scale: 1.1 }}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
