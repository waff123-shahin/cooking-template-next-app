import Image from "next/image";

export default function Herosection() {
  return (
    <div className="max-w-360 m-auto px-20 py-10">
      <div className="flex items-center gap-12 bg-[#E7FAFE] rounded-4xl">
        <div className="flex-1 p-12.5">
          <button className="bg-white text-black px-5 py-2.75 text-[14px] rounded-4xl flex items-center gap-2">
            <Image src="/recipe.png" alt="Recipe icon" width={20} height={20} />
            Hot Recipes
          </button>

          <h2 className="text-[64px] font-bold mb-4">
            Spicy delicious chicken wings
          </h2>
          <p className="text-black/60 mb-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad
            minim{" "}
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-black/5 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Image src="/Timer.png" alt="Timer icon" width={16} height={16} />
              30 Minutes
            </button>
            <button className="bg-black/5 px-4 py-2 rounded-full text-sm flex items-center gap-2">
              <Image
                src="/ForkKnife.png"
                alt="Fork and knife icon"
                width={16}
                height={16}
              />
              Chicken
            </button>
          </div>

          <div className="flex justify-between items-center mt-26">
            <div className="flex items-center gap-3">
              <Image
                src="/dp.png"
                alt="John Smith profile picture"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">John Smith</p>
                <p className="text-sm text-gray-500">15 March 2022</p>
              </div>
            </div>
            <div>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black/80 transition flex items-center gap-2">
                View Recipes
                <Image
                  src="/PlayCircle.png"
                  alt="Play icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/Mask Group.png"
            alt="Spicy chicken wings"
            width={650}
            height={700}
            style={{ width: "650px", height: "700px" }}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
