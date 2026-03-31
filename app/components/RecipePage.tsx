// app/about/page.tsx
import Image from "next/image";

export default function RecipePage() {
  return (
    <div className="max-w-360 m-auto px-20 py-16">
      {/* Header Section with Title, Author, and Meta Info */}
      <div>
        <div className="flex justify-between items-start gap-8">
          <div className="flex-1">
            <h1 className="text-[64px] font-bold mb-10">
              Health Japanese Fried Rice
            </h1>

            {/* Author and Info Cards - Side by Side with Borders */}
            <div className="flex flex-wrap items-center rounded-lg overflow-hidden w-fit">
              {/* Author with DP */}
              <div className="flex items-center gap-4 pr-14.5 py-4 border-r border-r-[#0000001A]">
                <Image
                  src="/dp.png"
                  alt="John Smith"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    John Smith
                  </span>
                  <span className="text-xs text-gray-500">15 March 2022</span>
                </div>
              </div>

              {/* Prep Time with Timer */}
              <div className="flex items-center gap-3 px-10 py-4 border-r border-r-[#0000001A]">
                <Image
                  src="/Timer.png"
                  alt="Timer"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    PREP TIME
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    15 Minutes
                  </p>
                </div>
              </div>

              {/* Cook Time with Timer */}
              <div className="flex items-center gap-3 px-10 py-4 border-r border-r-[#0000001A]">
                <Image
                  src="/Timer.png"
                  alt="Timer"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    COOK TIME
                  </p>
                  <p className="text-sm font-medium text-gray-800">
                    15 Minutes
                  </p>
                </div>
              </div>

              {/* Chicken with ForkKnife */}
              <div className="flex items-center gap-3 px-10 py-4">
                <Image
                  src="/ForkKnife.png"
                  alt="Cultery"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <div>
                  <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                    Chicken
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Print and Share Buttons - Side by Side */}
          <div className="flex flex-row gap-3 items-center text-center mt-7.5">
            {/* Print Button */}
            <div>
              <button className="bg-[#E7FAFE] rounded-full p-4 hover:bg-[#d0f0f8] transition-colors duration-200 flex items-center justify-center">
                <Image
                  src="/print.png"
                  alt="Print"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              <p className="text-xs text-gray-600 mt-1">Print</p>
            </div>

            {/* Share Button */}
            <div>
              <button className="bg-[#E7FAFE] rounded-full p-4 hover:bg-[#d0f0f8] transition-colors duration-200 flex items-center justify-center">
                <Image
                  src="/share.png"
                  alt="Share"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </button>
              <p className="text-xs text-gray-600 mt-1">Share</p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Image and Nutritional Info Section */}
      <div className="flex gap-8 mt-12">
        {/* Food Image - Increased Width */}
        <div className="flex-2">
          <Image
            src="/food.png"
            alt="Japanese Fried Rice"
            width={800}
            height={300}
            className="rounded-2xl object-cover w-full "
          />
        </div>

        {/* Nutritional Info */}
        <div className="flex-1">
          <div className="bg-[#E7FAFE] rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Nutrition Information
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Calories</span>
                <span className="text-lg font-semibold text-gray-900">
                  219.9 <span className="text-sm font-normal">kcal</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Total Fat</span>
                <span className="text-lg font-semibold text-gray-900">
                  10.7 <span className="text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Protein</span>
                <span className="text-lg font-semibold text-gray-900">
                  7.9 <span className="text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Carbohydrate</span>
                <span className="text-lg font-semibold text-gray-900">
                  22.3 <span className="text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Cholesterol</span>
                <span className="text-lg font-semibold text-gray-900">
                  37.4 <span className="text-sm font-normal">mg</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Total Fat</span>
                <span className="text-lg font-semibold text-gray-900">
                  10.7 <span className="text-sm font-normal">g</span>
                </span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="text-gray-600">Protein</span>
                <span className="text-lg font-semibold text-gray-900">
                  7.9 <span className="text-sm font-normal">g</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 pt-4 border-t border-gray-200">
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20">
        <p className="text-gray-700 leading-relaxed">
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
