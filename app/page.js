"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "./ components/HeroSection";
import Image from "next/image";
import FAQ from "./ components/FAQ";
import Footer from "./ components/Footer";
import Pricing from "./ components/Pricing";
import EmbeddedIframe from "./ components/Embed";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black">
    <div className="flex flex-col items-center text-white space-y-4">
      <div className="relative mb-4">
        <Image src="/Logo2.svg" alt="Logo" width={150} height={200} />
      </div>
      <div className="w-40 h-2 bg-gray-300 rounded-full overflow-hidden relative">
        <motion.div
          className="loading-bar bg-gradient-to-r from-[#1500f6] to-blue-500 h-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 0 }}
        ></motion.div>
      </div>
    </div>
  </div>
);
};
const Home = () => {
  // State to track whether to show the loading screen
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to transition from loading screen to main content after a delay
  useEffect(() => {
    // Simulate a delay of 2 seconds for the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Render the loading screen if isLoading is true
  if (isLoading) {
    return <Loading />;
  }

  // Render the main content once isLoading becomes false
  return (
    <>


      <div className={`bg-[#020202] min-w-screen overflow-x-hidden`}>
        <HeroSection />
        {/* <EmbeddedIframe/> */}
        <FAQ />
        <Pricing />
        <Footer />
      </div>
    </>
  );
};

export default Home;
