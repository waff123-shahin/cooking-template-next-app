"use client";

import Image from "next/image";

export default function NewsletterSection() {
  return (
    <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      <div className="bg-[#E7F9FD] rounded-3xl p-6 sm:p-10 md:p-12 lg:p-[48px] text-center relative overflow-hidden min-h-[350px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[442px] flex flex-col items-center justify-center">
        {/* Right Bottom Image */}
        <div className="absolute bottom-0 right-0">
          <Image
            src="/rightbottom.png"
            alt="Decoration"
            width={200}
            height={200}
            className="w-20 sm:w-28 md:w-36 lg:w-auto h-auto"
            priority={false}
          />
        </div>

        {/* Left Bottom Image */}
        <div className="absolute bottom-0 left-0">
          <Image
            src="/leftbottom.png"
            alt="Decoration"
            width={200}
            height={200}
            className="w-20 sm:w-28 md:w-36 lg:w-auto h-auto"
            priority={false}
          />
        </div>

        {/* Content - Centered with z-index */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black mb-3 sm:mb-4">
            Deliciousness to your inbox
          </h2>

          {/* Description */}
          <p className="text-black/60 text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 mt-2 sm:mt-4 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquet enim ad
            minim.
          </p>

          {/* Newsletter Form */}
          <div className="flex justify-center mt-4 sm:mt-8 md:mt-12 lg:mt-16 px-4">
            <div className="relative w-full max-w-[480px]">
              <input
                type="email"
                placeholder="Your email address..."
                className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-3xl border border-black/20 focus:outline-none focus:border-black/50 bg-white text-sm sm:text-base"
                style={{
                  height: "60px",
                  paddingRight: "130px",
                  paddingLeft: "20px",
                }}
              />
              <button
                className="absolute bg-black text-white rounded-3xl hover:bg-black/80 transition text-sm sm:text-base"
                style={{
                  right: "8px",
                  top: "8px",
                  width: "110px",
                  height: "44px",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
