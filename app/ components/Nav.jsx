"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const hamburger = "/hamburger (1).png";
  const close = "/close.png";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="max-w-7xl mx-auto w-full font-inter bg-transparent z-100 py-5">
      <nav className="bg-transparent w-full flex justify-between items-center max-container ">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-0">
          <Image src="/Logo2.svg" height="30" width="120" alt="Logo" />
        </Link>

        <ul className="flex flex-1 justify-center ml-10 mr-5 items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="leading-normal text-lg text-slate-gray hover:underline text-white hover:underline-offset-8 decoration-[#1500f6]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="items-center bg-transparent border border-[#1500f6] text-white py-1 px-6 rounded-xl hidden lg:flex">
          <Link href='https://tally.so/r/wL0eJp'>Sign up Today</Link>
        </button>

        <div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleMenu}>
            <Image src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
          {menuOpen && (
            <div
              className="fixed top-0 left-0 h-full w-full bg-black z-10 flex flex-col items-center"
              style={{ zIndex: 1000 }}>
              <div className="text-right px-4 w-full">
                <div className="w-full flex justify-between items-center mt-10">
                  <Link
                    href="/"
                    className="title-font font-medium items-center text-white md:mb-0 flex w-full">
                    <Image src="/Logo.svg" height="36" width="144" alt="Logo" />
                  </Link>
                  <button className="z-10" onClick={closeMenu}>
                    <Image
                      src={close}
                      alt="Close Icon"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
              <div className="text-center flex-1">
                <ul>
                  {navLinks.map((item) => (
                    <li key={item.label} className="py-4">
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="font-inter leading-normal text-2xl text-white hover:underline hover:underline-offset-8 decoration-[#1500f6]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-row my-10">
                  <button className="flex items-center bg-transparent border border-[#1500f6] text-white py-1 px-6 rounded-xl">
                    Sign up Today
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
