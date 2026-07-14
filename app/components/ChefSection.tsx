"use client";

import Image from "next/image";

export default function ChefSection() {
  return (
    <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      <div className="overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] font-bold text-black mb-3 sm:mb-4 leading-tight">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-black/60 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consecteturipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquet enim
              ad minim
            </p>
            <button className="bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-black/80 transition transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
              Learn More
            </button>
          </div>

          {/* Right Image - Full width on mobile and tablet */}
          <div className="w-full lg:flex-1 relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-full mx-auto">
              <Image
                src="/chef-image.png"
                alt="Chef cooking"
                width={600}
                height={500}
                className="object-contain w-full h-auto"
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
