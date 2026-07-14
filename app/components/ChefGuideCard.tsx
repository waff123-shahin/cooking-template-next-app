// app/components/ChefGuideSection.tsx
"use client";

import Image from "next/image";

export default function ChefGuideSection() {
  return (
    <div className="max-w-360 mx-auto px-3 sm:px-6 md:px-20 py-4 sm:py-8 md:py-16">
      <div>
        <div className="px-2 sm:px-4 md:px-6 lg:px-7.5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[55px] font-semibold text-center">
            Full Guide to Becoming a Professional Chef
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-15.25 mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-8 md:mb-12">
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

            <div className="flex items-center gap-3">
              <div className="border-l-2 border-l-[#0000001A] pl-4 sm:pl-5 md:pl-6">
                <p className="text-xs sm:text-sm text-gray-500">
                  March 15, 2022
                </p>
              </div>
            </div>
          </div>

          <p className="text-black/60 text-sm sm:text-base mb-4 sm:mb-6 text-center max-w-4xl mx-auto px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>

        {/* Image */}
        <div className="mb-6 sm:mb-8 mt-8 sm:mt-12 md:mt-16">
          <Image
            src="/chef-guide.png"
            alt="Professional Chef"
            width={1200}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
