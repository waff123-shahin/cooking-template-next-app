import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-360 m-auto px-20">
      {/* Ingredients, Other Recipe, and Directions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
        {/* Ingredients Section - Increased Width */}
        <div className="lg:col-span-2">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ingredients
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For main dish
              </h3>
              <div className="space-y-0">
                {/* Ingredient 1 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                {/* Ingredient 2 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                {/* Ingredient 3 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                {/* Ingredient 4 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit ame
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                For the sauce
              </h3>
              <div className="space-y-0">
                {/* Sauce Ingredient 1 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                {/* Sauce Ingredient 2 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                {/* Sauce Ingredient 3 */}
                <div className="flex items-center gap-3 pb-3.5 mb-[33px] border-b border-[#0000001A]">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <span className="text-gray-600">
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Directions Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Directions
            </h2>
            <div className="space-y-0">
              <div className="pb-12 mb-12 border-b border-[#0000001A]">
                <div className="flex items-start gap-3 mb-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center mt-1"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    1. Lorem ipsum dolor sit amet
                  </h3>
                </div>
                {/* First Paragraph */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui doloorem ipsum quia dolor sit amet, consectetur adipiscing
                  elit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                {/* Image */}
                <div className="mb-6">
                  <Image
                    src="/woman.png"
                    alt="Woman cooking"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>

                {/* Second Paragraph */}
                <p className="text-gray-600 leading-relaxed mt-6.25 ml-6.25">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui doloorem ipsum quia dolor sit amet, consectetur adipiscing
                  elit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>

              <div className="pb-12 mb-12 border-b border-[#0000001A]">
                <div className="flex items-start gap-3 mb-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center mt-1"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    2. Lorem ipsum dolor sit amet
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6.25 ml-6.25">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui doloorem ipsum quia dolor sit amet, consectetur adipiscing
                  elit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>

              <div className="pb-12 mb-12 border-b border-[#0000001A]">
                <div className="flex items-start gap-3 mb-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded-full border-2 border-gray-300 checked:bg-black checked:border-black focus:ring-2 focus:ring-black focus:ring-offset-0 cursor-pointer appearance-none checked:bg-black checked:bg-center mt-1"
                    style={{
                      accentColor: "black",
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    3. Lorem ipsum dolor sit amet
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mt-6.25 ml-6.25">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui doloorem ipsum quia dolor sit amet, consectetur adipiscing
                  elit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Recipe Section */}
        {/* Other Recipe Section */}
        <div className="lg:col-span-1">
          <div className="p-6 sticky top-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Other Recipe
            </h2>

            <div className="space-y-6">
              {/* Recipe 1 - Salad */}
              <div className="flex gap-4 items-center">
                <div className="shrink-0">
                  <Image
                    src="/salad.png"
                    alt="Salad"
                    width={160}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Chicken Meatball with Creamy Cheese
                  </h3>
                  <p className="text-sm text-gray-500">by Antonia Paula</p>
                </div>
              </div>

              {/* Recipe 2 - Meatballs */}
              <div className="flex gap-4 items-center">
                <div className="shrink-0">
                  <Image
                    src="/meatballs.png"
                    alt="Meatballs"
                    width={160}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The Creamiest Creamy Chicken an...
                  </h3>
                  <p className="text-sm text-gray-500">by Antonia Paula</p>
                </div>
              </div>

              {/* Recipe 3 - Pancake */}
              <div className="flex gap-4 items-center">
                <div className="shrink-0">
                  <Image
                    src="/pancake.png"
                    alt="Pancake"
                    width={160}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    The Best Easy One Pot Chicken and Rice
                  </h3>
                  <p className="text-sm text-gray-500">by Antonia Paula</p>
                </div>
              </div>

              {/* Divider */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic mb-2">
                  Don't forget to eat healthy food!
                </p>
                <p className="text-sm text-gray-500">www.foodies.co.uk</p>
              </div>

              {/* Add Ads.png here */}
              <div className="mt-6">
                <Image
                  src="/Ads.png"
                  alt="Advertisement"
                  width={300}
                  height={250}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
