"use client";

import Image from "next/image";

export default function Herosection() {
  return (
    <div className="max-w-360 m-auto px-4 sm:px-8 md:px-20 py-6 sm:py-8 md:py-10">
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 bg-[#E7FAFE] rounded-3xl md:rounded-4xl p-6 md:p-8 lg:p-12.5">
        {/* Left Content */}
        <div className="w-full lg:flex-1 lg:order-1">
          <button className="bg-white text-black px-4 sm:px-5 py-2 sm:py-2.75 text-[12px] sm:text-[14px] rounded-full sm:rounded-4xl flex items-center gap-2 mb-4 sm:mb-6">
            <Image
              src="/recipe.png"
              alt="Recipe icon"
              width={16}
              height={16}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            Hot Recipes
          </button>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[64px] font-bold mb-3 sm:mb-4 leading-tight">
            Spicy delicious chicken wings
          </h2>

          <p className="text-black/60 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
            <button className="bg-black/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/Timer.png"
                alt="Timer icon"
                width={14}
                height={14}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
              30 Minutes
            </button>
            <button className="bg-black/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <Image
                src="/ForkKnife.png"
                alt="Fork and knife icon"
                width={14}
                height={14}
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
              />
              Chicken
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-26">
            <div className="flex items-center gap-3">
              <Image
                src="/dp.png"
                alt="John Smith profile picture"
                width={40}
                height={40}
                className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12"
                priority
              />
              <div>
                <p className="font-semibold text-sm sm:text-base">John Smith</p>
                <p className="text-xs sm:text-sm text-gray-500">
                  15 March 2022
                </p>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg hover:bg-black/80 transition flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
                View Recipes
                <Image
                  src="/PlayCircle.png"
                  alt="Play icon"
                  width={18}
                  height={18}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image - Full width on mobile and tablet */}
        <div className="w-full lg:w-auto lg:flex-1 lg:order-2 flex justify-center items-center">
          <div className="relative w-full lg:max-w-full">
            <Image
              src="/Mask Group.png"
              alt="Spicy chicken wings"
              width={650}
              height={700}
              className="rounded-lg object-cover w-full h-auto"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
