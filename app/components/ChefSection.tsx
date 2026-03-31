import Image from "next/image";

export default function ChefSection() {
  return (
    <div className="max-w-360 m-auto px-20 py-16">
      <div className=" overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12  ">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-[40px] md:text-[48px] font-bold text-black mb-4 leading-tight">
              Everyone can be a chef in their own kitchen
            </h2>
            <p className="text-black/60 text-base md:text-lg mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consecteturipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquet enim
              ad minim
            </p>
            <button className="bg-black h-15 mt-18 w-45 text-white px-8 py-3 rounded-full hover:bg-black/80 transition transform hover:scale-105">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <div className="relative h-150  w-full">
              <Image
                src="/chef-image.png"
                alt="Chef cooking"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
