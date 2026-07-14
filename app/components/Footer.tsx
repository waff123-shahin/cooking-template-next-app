"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      {/* Top Section - Logo, Description & Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8 pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-black/10">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3
            className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            Foodieland.
          </h3>
          <p className="text-black/60 text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md">
            Lorem ipsum dolor sit amet, consecteturipiscing elit,
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8">
          <Link
            href="/recipes"
            className="text-black text-sm sm:text-[16px] hover:text-black/80 transition font-medium"
          >
            Recipes
          </Link>
          <Link
            href="/blog"
            className="text-black text-sm sm:text-[16px] hover:text-black/80 transition font-medium"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black text-sm sm:text-[16px] hover:text-black/80 transition font-medium"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="text-black text-sm sm:text-[16px] hover:text-black/80 transition font-medium"
          >
            About us
          </Link>
        </div>
      </div>

      {/* Bottom Section - Copyright & Social Icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
        <p className="text-black/40 text-sm sm:text-base md:text-[18px] text-center sm:text-left order-2 sm:order-1">
          © 2020 Flowbase. Powered by Webflow
        </p>
        <div className="order-1 sm:order-2">
          <Image
            src="/social.png"
            alt="Social Media"
            width={140}
            height={24}
            className="cursor-pointer hover:opacity-70 transition w-auto h-auto"
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
}
