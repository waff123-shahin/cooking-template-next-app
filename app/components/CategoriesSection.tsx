"use client";

import Image from "next/image";

export default function CategoriesSection() {
  const categories = [
    {
      name: "Breakfast",
      image: "/breakfast.png",
      recipes: 238,
      gradient: "from-[#FF6B6B]/0 to-[#FF8E53]/10",
    },
    {
      name: "Vegan",
      image: "/vegan.png",
      recipes: 58,
      gradient: "from-[#4ECDC4]/0 to-[#45B7AF]/10",
    },
    {
      name: "Meat",
      image: "/meat.png",
      recipes: 58,
      gradient: "from-[#FF4757]/0 to-[#FF6B81]/10",
    },
    {
      name: "Dessert",
      image: "/dessert.png",
      recipes: 58,
      gradient: "from-[#A55DFF]/0 to-[#C084FC]/10",
    },
    {
      name: "Lunch",
      image: "/lunch.png",
      recipes: 58,
      gradient: "from-[#4A90E2]/0 to-[#5C9EFF]/10",
    },
    {
      name: "Chocolate",
      image: "/chocolate.png",
      recipes: 58,
      gradient: "from-[#8B5A2B]/0 to-[#A67B45]/10",
    },
  ];

  return (
    <div className="max-w-360 m-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black">
          Categories
        </h2>
        <button className="bg-[#E7FAFE] rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-black hover:bg-[#E7FAFE]/70 transition font-semibold whitespace-nowrap">
          View All Categories
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {categories.map((category, index) => (
          <div key={index} className="text-center group cursor-pointer">
            {/* Gradient Box */}
            <div
              className={`bg-gradient-to-br ${category.gradient} w-full aspect-square flex flex-col items-center justify-center p-4 group-hover:scale-105 lg:group-hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl rounded-[16px] sm:rounded-[20px]`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={60}
                height={60}
                className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px]"
                priority={index < 3}
              />
              <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-7.5">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black">
                  {category.name}
                </h3>
                {category.recipes && (
                  <p className="text-xs sm:text-sm text-black/60">
                    {category.recipes} Recipes
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
