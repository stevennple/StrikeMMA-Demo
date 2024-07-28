"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Nav from "../ components/Nav";

const gradient = "/Gradient.svg";
const mockupMain = "/mockupmain.svg";
const buttons = [
  { text: "Download Now", icon: "/android.svg", href: "/" },
  { text: "Download Now", icon: "/store.svg", href: "/" },
];
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Trigger the animation when the component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div className="min-h-full flex flex-col items-center relative max-w-7xl px-20 sm:px-[20px] mx-auto">
      {/* Gradient for the top section */}
      <Nav />
      <div className="absolute top-0 left-0 w-full h-[70%] lg:h-[90%] pointer-events-none z-0">
        <div
          className="w-full h-full justify-center items-center z-0 "
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundSize: "cover",
            opacity: 0.9,
            filter: "blur(30px)",
            position: "absolute",
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Center horizontally
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }} // Initial animation state (hidden below)
        animate={{ opacity: 1, y: 0 }} // Animation to move up from the bottom
        transition={{ duration: 1, delay: 1 }} // Animation duration and delay
        className="w-full h-[70%] lg:h-[80%] flex flex-col lg:flex-row items-center justify-around z-10">
        <div>
          <h1 className="text-8xl lg:text-7xl font-bold text-white">
            Are you ready
            <br /> to{" "}
            <span className="text-[#1500f6] font-extrabold"> Strike</span>{" "}
          </h1>
          <p className="text-xl text-gray-400 my-5">
            Don't miss out on the ultimate training experience. Join Strike.AI
            today and unlock your full potential. Click the button below to get
            started!
          </p>
          <button className="flex items-center bg-transparent border border-[#1500f6] text-white py-1 px-6 rounded-xl ">
            <Link href="https://tally.so/r/wL0eJp">Sign up Today</Link>
          </button>
        </div>
        <img
          src={mockupMain}
          alt="Mockup Main"
          className="w-full h-full object-fit lg:w-[60%] lg:h-[60%]"
        />
      </motion.div>

      <div className="absolute bottom-5 md:bottom-20 left-0 right-0 flex gap-4 mt-2 justify-evenly z-10"></div>
    </div>
  );
};

export default HeroSection;
