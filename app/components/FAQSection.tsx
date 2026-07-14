// app/components/FAQSection.tsx
"use client";

import Image from "next/image";

export default function FAQSection() {
  return (
    <div className="max-w-360 mx-auto px-3 sm:px-6 md:px-20 py-4 sm:py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-0 sm:px-4 md:px-8 lg:px-12 xl:px-22">
        {/* Left Content - FAQs */}
        <div className="w-full lg:flex-1">
          <div className="flex flex-col space-y-8 sm:space-y-10 md:space-y-12">
            {/* Question 1 */}
            <div className="flex flex-col pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-[#0000001A]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                How did you start out in the food industry?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>

            {/* Question 2 */}
            <div className="flex flex-col pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-[#0000001A]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                What do you like most about your job?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>

            {/* Question 3 with Image */}
            <div className="flex flex-col pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-[#0000001A]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Do you cook at home on your days off?
              </h3>
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/kitchen.png"
                  alt="Image of a kitchen"
                  width={800}
                  height={400}
                  className="rounded-2xl object-cover w-full h-auto"
                  priority
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>

            {/* Question 4 - Full Width */}
            <div className="flex flex-col pb-6 sm:pb-8 md:pb-10 lg:pb-12 border-b border-[#0000001A]">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                What would your advice be to young people looking to get their
                foot in the door?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>

              {/* Quote */}
              <div className="my-6 sm:my-8 pl-4 sm:pl-6 md:pl-8 border-l-4 border-[#0000001A]">
                <p className="text-base sm:text-lg md:text-xl italic text-gray-700 leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio."
                </p>
              </div>
            </div>

            {/* Question 5 - Full Width */}
            <div className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                What is the biggest misconception that people have about being a
                professional chef?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar. Fusce id mollis ex. Praesent feugiat
                elementum ex ut suscipit.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Share Section */}
        <div className="w-full lg:w-auto lg:min-w-[120px] xl:min-w-[140px]">
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-0 pt-4 sticky top-8">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 lg:mb-4 whitespace-nowrap">
              SHARE THIS ON:
            </h4>
            <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 justify-center">
              <button className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Image
                  src="/facebook.png"
                  alt="facebook icon"
                  width={16}
                  height={20}
                  className="object-contain w-4 h-5 sm:w-[13px] sm:h-5"
                />
              </button>
              <button className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Image
                  src="/instagrm.png"
                  alt="instagram icon"
                  width={16}
                  height={20}
                  className="object-contain w-4 h-5 sm:w-[13px] sm:h-5"
                />
              </button>
              <button className="p-2 sm:p-3 hover:bg-gray-100 rounded-full transition-colors">
                <Image
                  src="/x.png"
                  alt="x icon"
                  width={16}
                  height={20}
                  className="object-contain w-4 h-5 sm:w-[13px] sm:h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
