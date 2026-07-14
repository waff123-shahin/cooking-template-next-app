"use client";

import Image from "next/image";

export default function RecipesSection() {
  const recipes = [
    {
      title: "Mixed Tropical Fruit Salad with Superfood Boosts",
      image: "/fruit-pancake.png",
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      image: "/meatballs.png",
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      title: "Big and Juicy Wagyu Beef Cheeseburger",
      image: "/wagyu-burger.png",
      time: "30 Minutes",
      category: "Western",
    },
    {
      title: "Barbeque Spicy Sandwiches with Chips",
      image: "/pancake.png",
      time: "30 Minutes",
      category: "Snack",
    },
    {
      title: "Health Japanese Fried Rice with Asparagus",
      image: "/chicken-rice.png",
      time: "30 Minutes",
      category: "Healthy",
    },
    {
      title: "Firecracker Vegan Lettuce Wraps - Spicy!",
      image: "/chicken-rice.png",
      time: "30 Minutes",
      category: "Seafood",
    },
    {
      title: "Cauliflower Walnut Vegetarian Taco Meat",
      image: "/salad.png",
      time: "30 Minutes",
      category: "Eastern",
    },
    {
      title: "Chicken Ramen Soup with Mushroom",
      image: "/meatballs.png",
      time: "30 Minutes",
      category: "Japanese",
    },
  ];

  return (
    <div className="max-w-360 mx-auto px-4 sm:px-8 md:px-20 py-8 sm:py-12 md:py-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black max-w-3xl">
          Try this delicious recipe to make your day
        </h2>
        <p className="text-black/60 text-sm sm:text-base max-w-lg lg:max-w-sm xl:max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="overflow-hidden transition group cursor-pointer"
          >
            {/* Recipe Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 rounded-2xl">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-300 p-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index < 4}
              />
              {/* Like Icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
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

            {/* Recipe Content */}
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-bold text-black mb-2 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
                {recipe.title}
              </h3>

              {/* Time and Category */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-black/60">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Image
                    src="/Timer.png"
                    alt="Timer"
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    priority={false}
                  />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Image
                    src="/ForkKnife.png"
                    alt="Category"
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    priority={false}
                  />
                  <span>{recipe.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
