"use client";
import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import { useTheme } from "@/app/contexts/ThemeContext";

export default function Contact() {
  const [result, setResult] = useState("");
  const { theme } = useTheme();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "532b3d2f-8528-4ca9-8eb5-eaef41e94f9a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const styleInput =
    "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md text-sm sm:text-base";
  const styleTextarea =
    "w-full p-3 sm:p-4 mb-4 sm:mb-6 outline-none border-[0.5px] border-gray-400 rounded-md text-sm sm:text-base";

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center pt-20 md:pt-32 lg:pt-38 px-4 sm:px-6 lg:px-8"
        id="contact"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg mb-2"
        >
          Connect with me
        </motion.h4>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-sans"
        >
          Get in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm sm:text-base mt-3 sm:mt-6 max-w-2xl mx-auto"
        >
          I'd love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </motion.p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto mt-6 sm:mt-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            <motion.input
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              name="name"
              type="text"
              placeholder="Enter Your Name"
              required
              className={styleInput}
            />
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className={styleInput}
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            name="message"
            placeholder="Enter Your Message"
            required
            rows={5}
            className={styleTextarea}
          ></motion.textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className={`cursor-pointer py-2 sm:py-3 px-6 sm:px-8 w-max flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto text-sm sm:text-base ${
              theme === 'dark' 
                ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                : 'hover:bg-gray-800'
            }`}
          >
            Submit Now
            <Image
              src={assets.right_arrow_white}
              className="w-3 sm:w-4"
              alt="Submit"
            />
          </motion.button>
          <p className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl flex justify-center">{result}</p>
        </motion.form>
      </motion.section>
    </>
  );
}