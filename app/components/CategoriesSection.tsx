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
      gradient: "from-[#FF4757]/0 to-[#FF6B81]/10",
    },
    {
      name: "Dessert",
      image: "/dessert.png",
      gradient: "from-[#A55DFF]/0 to-[#C084FC]/10",
    },
    {
      name: "Lunch",
      image: "/lunch.png",
      gradient: "from-[#4A90E2]/0 to-[#5C9EFF]/10",
    },
    {
      name: "Chocolate",
      image: "/chocolate.png",
      gradient: "from-[#8B5A2B]/0 to-[#A67B45]/10",
    },
  ];

  return (
    <div className="max-w-360 m-auto px-20 py-16">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[48px] font-bold text-black">Categories</h2>
        <button className="bg-[#E7FAFE] rounded-full px-6 py-2 text-black hover:bg-[#E7FAFE]/70 transition font-semibold">
          View All Categories
        </button>
      </div>

      {/* Changed gap from gap-8 to gap-10 for 40px gap */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {categories.map((category, index) => (
          <div key={index} className="text-center group cursor-pointer">
            {/* Square gradient box with increased height and border radius */}
            <div
              className={`bg-linear-to-br ${category.gradient} w-full h-45 flex flex-col items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl rounded-[20px]`}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={80}
                height={80}
                className="object-contain"
              />
              {/* 30px gap between image and name */}
              <div className="mt-7.5">
                <h3 className="text-lg font-semibold text-black">
                  {category.name}
                </h3>
                {category.recipes && (
                  <p className="text-sm text-black/60">
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
