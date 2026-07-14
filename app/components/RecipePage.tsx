// app/about/page.tsx
"use client";

import Image from "next/image";

export default function RecipePage() {
  return (
    <div className="max-w-360 mx-auto px-3 sm:px-6 md:px-20 py-4 sm:py-8 md:py-16">
      {/* Header Section */}
      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
          <div className="w-full lg:flex-1">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold mb-3 sm:mb-6 md:mb-8 lg:mb-10">
              Health Japanese Fried Rice
            </h1>

            {/* Author and Info Cards */}
            <div className="flex flex-wrap items-center rounded-lg overflow-hidden w-full md:w-fit border border-[#0000001A]">
              {/* Author with DP */}
              <div className="flex items-center gap-2 sm:gap-4 px-2 sm:px-6 md:px-8 lg:pr-14.5 py-2 sm:py-4 border-r border-r-[#0000001A] flex-1 md:flex-none">
                <Image
                  src="/dp.png"
                  alt="John Smith"
                  width={28}
                  height={28}
                  className="rounded-full object-cover w-7 h-7 sm:w-10 sm:h-10"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] sm:text-sm font-medium text-gray-900">
                    John Smith
                  </span>
                  <span className="text-[8px] sm:text-xs text-gray-500">
                    15 March 2022
                  </span>
                </div>
              </div>

              {/* Prep Time */}
              <div className="flex items-center gap-1.5 sm:gap-3 px-2 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-4 border-r border-r-[#0000001A] flex-1 md:flex-none">
                <Image
                  src="/Timer.png"
                  alt="Timer"
                  width={16}
                  height={16}
                  className="object-contain w-3.5 h-3.5 sm:w-5 sm:h-5"
                />
                <div>
                  <p className="text-[8px] sm:text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    PREP TIME
                  </p>
                  <p className="text-[10px] sm:text-sm font-medium text-gray-800">
                    15 Minutes
                  </p>
                </div>
              </div>

              {/* Cook Time */}
              <div className="flex items-center gap-1.5 sm:gap-3 px-2 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-4 border-r border-r-[#0000001A] flex-1 md:flex-none">
                <Image
                  src="/Timer.png"
                  alt="Timer"
                  width={16}
                  height={16}
                  className="object-contain w-3.5 h-3.5 sm:w-5 sm:h-5"
                />
                <div>
                  <p className="text-[8px] sm:text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    COOK TIME
                  </p>
                  <p className="text-[10px] sm:text-sm font-medium text-gray-800">
                    15 Minutes
                  </p>
                </div>
              </div>

              {/* Chicken */}
              <div className="flex items-center gap-1.5 sm:gap-3 px-2 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-4 flex-1 md:flex-none">
                <Image
                  src="/ForkKnife.png"
                  alt="Cultery"
                  width={16}
                  height={16}
                  className="object-contain w-3.5 h-3.5 sm:w-5 sm:h-5"
                />
                <div>
                  <p className="text-[8px] sm:text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    Chicken
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Print and Share Buttons */}
          <div className="flex flex-row gap-2 sm:gap-3 items-center text-center mt-2 lg:mt-7.5 w-full sm:w-auto justify-center sm:justify-start">
            <div>
              <button className="bg-[#E7FAFE] rounded-full p-2.5 sm:p-4 hover:bg-[#d0f0f8] transition-colors duration-200 flex items-center justify-center">
                <Image
                  src="/print.png"
                  alt="Print"
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 sm:w-6 sm:h-6"
                />
              </button>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-1">Print</p>
            </div>
            <div>
              <button className="bg-[#E7FAFE] rounded-full p-2.5 sm:p-4 hover:bg-[#d0f0f8] transition-colors duration-200 flex items-center justify-center">
                <Image
                  src="/share.png"
                  alt="Share"
                  width={16}
                  height={16}
                  className="object-contain w-4 h-4 sm:w-6 sm:h-6"
                />
              </button>
              <p className="text-[10px] sm:text-xs text-gray-600 mt-1">Share</p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Image and Nutritional Info Section */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 mt-6 sm:mt-10 md:mt-12">
        {/* Food Image */}
        <div className="w-full lg:flex-[2]">
          <Image
            src="/food.png"
            alt="Japanese Fried Rice"
            width={800}
            height={400}
            className="rounded-2xl object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Nutritional Info */}
        <div className="w-full lg:flex-1">
          <div className="bg-[#E7FAFE] rounded-2xl p-3 sm:p-6 md:p-8 border border-gray-200">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-6">
              Nutrition Information
            </h2>
            <div className="space-y-2 sm:space-y-4">
              <div className="flex justify-between items-center pb-1.5 sm:pb-3 border-b border-gray-200">
                <span className="text-xs sm:text-base text-gray-600">
                  Calories
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-900">
                  219.9{" "}
                  <span className="text-[10px] sm:text-sm font-normal">
                    kcal
                  </span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-1.5 sm:pb-3 border-b border-gray-200">
                <span className="text-xs sm:text-base text-gray-600">
                  Total Fat
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-900">
                  10.7{" "}
                  <span className="text-[10px] sm:text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-1.5 sm:pb-3 border-b border-gray-200">
                <span className="text-xs sm:text-base text-gray-600">
                  Protein
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-900">
                  7.9{" "}
                  <span className="text-[10px] sm:text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-1.5 sm:pb-3 border-b border-gray-200">
                <span className="text-xs sm:text-base text-gray-600">
                  Carbohydrate
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-900">
                  22.3{" "}
                  <span className="text-[10px] sm:text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-1.5 sm:pb-3 border-b border-gray-200">
                <span className="text-xs sm:text-base text-gray-600">
                  Cholesterol
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-900">
                  37.4{" "}
                  <span className="text-[10px] sm:text-sm font-normal">mg</span>
                </span>
              </div>
            </div>
            <p className="text-[10px] sm:text-sm text-gray-500 italic mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-gray-200">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 sm:mt-16 md:mt-20">
        <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
