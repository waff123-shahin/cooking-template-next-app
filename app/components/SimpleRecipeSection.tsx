"use client";

import Image from "next/image";

export default function SimpleRecipesSection() {
  const recipes = [
    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      image: "/wagyu-burger.png",
      time: "30 Minutes",
      category: "Snack",
    },
    {
      title: "Fresh Lime Roasted Salmon with Ginger Sauce",
      image: "/salmon.png",
      time: "30 Minutes",
      category: "Pint",
    },
    {
      title: "Strawberry Oatmeal Pancake with Honey Syrup",
      image: "/pancake.png",
      time: "30 Minutes",
      category: "Snack",
    },
    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      image: "/salad.png",
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      title: "Chicken Meatballs with Cream Cheese",
      image: "/meatballs.png",
      time: "30 Minutes",
      category: "Meat",
    },
    {
      title: "Fruit Pancake with Orange & Blueberry",
      image: "/fruit-pancake.png",
      time: "30 Minutes",
      category: "Sweet",
    },
    {
      title: "The Best Easy One Pot Chicken and Rice",
      image: "/chicken-rice.png",
      time: "30 Minutes",
      category: "Snack",
    },
    {
      title: "Fresh and Healthy Mixed Mayonnaise Salad",
      image: "/salad.png",
      time: "30 Minutes",
      category: "Healthy",
    },
  ];

  // Create array with ad inserted at position 5 (6th card)
  const allItems = [
    ...recipes.slice(0, 5),
    { isAd: true, type: "ad" },
    ...recipes.slice(5),
  ];

  return (
    <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
          Simple and tasty recipes
        </h2>
        <p className="text-black/60 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-16 md:mt-24">
        {allItems.map((item, index) => {
          // Check if it's an ad
          if (item.isAd) {
            return (
              <div
                key={`ad-${index}`}
                className="bg-gradient-to-br from-[#E7F9FD]/20 to-[#E7F9FD]/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/Ads.png"
                    alt="Advertisement"
                    fill
                    className="object-contain p-4 sm:p-6 md:p-8"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex-1">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 text-center">
                      Sponsored
                    </h3>
                    <p className="text-sm text-black/60 text-center">
                      Advertisement
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          // Recipe card
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-[#E7F9FD]/20 to-[#E7F9FD]/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300 p-2 sm:p-3 md:p-4"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                {/* Like icon */}
                <div className="absolute top-3 sm:top-4 md:top-6 lg:top-8 right-3 sm:right-4 md:right-6 lg:right-8 z-10">
                  <Image
                    src="/like.png"
                    alt="Like"
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
                    priority={false}
                  />
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6 flex-1">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 sm:mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Image
                      src="/Timer.png"
                      alt="Timer"
                      width={18}
                      height={18}
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                      priority={false}
                    />
                    <span className="text-xs sm:text-sm text-black/60">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Image
                      src="/ForkKnife.png"
                      alt="Category"
                      width={18}
                      height={18}
                      className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
                      priority={false}
                    />
                    <span className="text-xs sm:text-sm text-black/60">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
