// app/contact/page.tsx
"use client";

import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-360 mx-auto px-3 sm:px-6 md:px-20 py-4 sm:py-8 md:py-16">
      {/* Main Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-8 sm:mb-10 md:mb-12">
        Contact us
      </h1>

      {/* Flex Container - Two Columns */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Side - Chef Image */}
        <div className="w-full lg:flex-[0.8] order-2 lg:order-1">
          <div className="sticky top-8">
            <Image
              src="/cheif.png"
              alt="Chef"
              width={400}
              height={472}
              className="rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:flex-[1.2] order-1 lg:order-2">
          <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6">
            <form className="space-y-4">
              {/* First Row: Name and Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Second Row: Subject and Enquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Subject Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                {/* Enquiry Type Dropdown */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                    ENQUIRY TYPE
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white">
                    <option>Advertising</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              {/* Messages Field */}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-1.5">
                  MESSAGES
                </label>
                <textarea
                  placeholder="Enter your messages..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition resize-none"
                  style={{ height: "150px" }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-semibold transition duration-200 w-full sm:w-auto"
                style={{
                  width: "100%",
                  maxWidth: "180px",
                  height: "56px",
                  borderRadius: "16px",
                  opacity: 1,
                  display: "block",
                  marginTop: "32px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
