"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white text-black max-w-360 m-auto border-b border-solid border-black/10">
      <div className="px-4 sm:px-6 md:px-20 py-4 md:py-6 lg:py-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h3
              className="text-xl sm:text-2xl lg:text-3xl cursor-pointer hover:text-gray-600 transition-colors"
              style={{ fontFamily: "Lobster, cursive" }}
            >
              Foodieland.
            </h3>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 lg:gap-6 text-[14px] lg:text-[16px]">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-600 transition-colors">
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About us
          </Link>
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:block flex-shrink-0">
          <Image
            src="/social.png"
            alt="Social Media"
            width={140}
            height={24}
            className="cursor-pointer hover:opacity-70 transition-opacity"
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 ml-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 flex flex-col gap-3">
          <Link
            href="/"
            className="text-[16px] hover:text-gray-600 py-2.5 border-b border-black/5 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-[16px] hover:text-gray-600 py-2.5 border-b border-black/5 transition-colors"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[16px] hover:text-gray-600 py-2.5 border-b border-black/5 transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-[16px] hover:text-gray-600 py-2.5 border-b border-black/5 transition-colors"
            onClick={closeMenu}
          >
            About us
          </Link>
          <div className="pt-3">
            <Image
              src="/social.png"
              alt="Social Media"
              width={140}
              height={24}
              className="cursor-pointer hover:opacity-70 transition-opacity"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
