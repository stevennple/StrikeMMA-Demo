"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <Link href="/" className="flex items-center">
            <Image src="/Logo2.svg" alt="Logo" width={120} height={30} />
          </Link>
        </div>
        <div className="flex items-center">
          <p className="text-gray-400 text-sm items-center text-center">
            &copy; 2024 StrikeMMA.AI <br /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
