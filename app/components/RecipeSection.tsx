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
    <div className="max-w-360 m-auto px-20 py-16">
      {/* Header Section */}
      <div className=" flex justify-between items-center mb-20">
        <h2 className="text-[48px] font-bold text-black ">
          Try this delicious recipe to make your day
        </h2>
        <p className="text-black/60 max-w-155 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="overflow-hidden transition group cursor-pointer"
          >
            {/* Recipe Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              {/* Like Icon - positioned with margin top 16px and margin right 16px */}
              <div className="absolute top-4 right-4 z-10">
                <Image
                  src="/like.png"
                  alt="Like"
                  width={24}
                  height={24}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </div>
            </div>

            {/* Recipe Content */}
            <div className="p-4">
              <h3 className="text-base font-bold text-black mb-2 line-clamp-2 min-h-[48px]">
                {recipe.title}
              </h3>

              {/* Time and Category with Timer.png and ForkKnife.png */}
              <div className="flex items-center gap-4 text-sm text-black/60">
                <div className="flex items-center gap-2">
                  <Image src="/Timer.png" alt="Timer" width={16} height={16} />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/ForkKnife.png"
                    alt="Category"
                    width={16}
                    height={16}
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
