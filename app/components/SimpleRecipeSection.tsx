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
    ...recipes.slice(0, 5), // First 5 recipes
    { isAd: true, type: "ad" }, // Ad as 6th card
    ...recipes.slice(5), // Remaining recipes (7th, 8th)
  ];

  return (
    <div className="max-w-360 m-auto px-20 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-[48px] font-bold text-black mb-4">
          Simple and tasty recipes
        </h2>
        <p className="text-black/60 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Single Grid - All cards including ad */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {allItems.map((item, index) => {
          // Check if it's an ad
          if (item.isAd) {
            return (
              <div key={`ad-${index}`} className="relative h-120 w-full">
                <Image
                  src="/Ads.png"
                  alt="Advertisement"
                  fill
                  className="object-cover p-4"
                />
              </div>
            );
          }
          // Recipe card with gradient from #E7F9FD 0% to 10%
          return (
            <div
              key={index}
              className="bg-linear-to-br from-[#E7F9FD]/20 to-[#E7F9FD]/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
            >
              <div className="relative h-75 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300 p-4"
                />
                {/* Like icon positioned at top right */}
                <div className="absolute top-8 right-8 z-10">
                  <Image
                    src="/like.png"
                    alt="Like"
                    width={24}
                    height={24}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[24px] font-bold text-black mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/Timer.png"
                      alt="Timer"
                      width={18}
                      height={18}
                    />
                    <span className="text-sm text-black/60">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/ForkKnife.png"
                      alt="Category"
                      width={18}
                      height={18}
                    />
                    <span className="text-sm text-black/60">
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
