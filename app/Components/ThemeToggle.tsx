"use client";
import { assets } from "@/assets/assets";
import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

export default function ThemeToggle( ) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 bg-gray-200 transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Image
        src={theme === 'light' ? assets.moon_icon :assets. sun_icon}
        alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        width={24}
        height={24}
        className="w-5 sm:w-6 transition-transform duration-300 hover:scale-110 dark:invert"
      />
    </button>
  );
}